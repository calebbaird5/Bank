import {
  createContext,
  useCallback,
  useContext,
  type Dispatch,
  type SetStateAction,
} from "react";

export interface Player {
  id: string;
  name: string;
  score: number;
  currentlyBanked?: boolean;
}

export interface GameContextType {
  isStartedState: [boolean, Dispatch<SetStateAction<boolean>>];
  playersState: [Player[], Dispatch<SetStateAction<Player[]>>];
  focusedPlayerIndexState: [
    number | null,
    Dispatch<SetStateAction<number | null>>,
  ];
  currentRoundState: [number, Dispatch<SetStateAction<number>>];
  currentTurnState: [number, Dispatch<SetStateAction<number>>];
  currentRollState: [number, Dispatch<SetStateAction<number>>];
  potState: [number, Dispatch<SetStateAction<number>>];
  maxRoundsState: [number, Dispatch<SetStateAction<number>>];
}

export const GameContext = createContext<GameContextType>({
  isStartedState: [false, () => {}],
  playersState: [[], () => {}],
  focusedPlayerIndexState: [0, () => {}],
  currentRoundState: [1, () => {}],
  currentTurnState: [0, () => {}],
  currentRollState: [0, () => {}],
  potState: [0, () => {}],
  maxRoundsState: [10, () => {}],
});

export function useGameContext() {
  const {
    isStartedState: [isStarted, setIsStarted],
    currentRoundState: [currentRound, setCurrentRound],
    currentTurnState: [currentTurn, setCurrentTurn],
    playersState: [players, setPlayers],
    currentRollState: [currentRoll, setCurrentRoll],
    potState: [pot, setPot],
    maxRoundsState: [maxRounds, setMaxRounds],
  } = useContext(GameContext);

  const endGame = () => {
    setIsStarted(false);
    setCurrentRound(1);
    setCurrentTurn(0);
    setCurrentRoll(0);
  };

  const endTurn = () => {
    if (
      players.length === 0 ||
      currentTurn < 0 ||
      players.length <= currentTurn
    )
      return;
    const turn = currentTurn;
    let nextTurn = turn;

    do {
      nextTurn = (nextTurn + 1) % players.length;
      if (!players[nextTurn].currentlyBanked) {
        setCurrentTurn(nextTurn);
        return;
      }
    } while (nextTurn !== turn);
    endRound();
  };

  const endRound = () => {
    setCurrentRoll(0);
    setPot(0);
    setPlayers((current) =>
      current.map((p) => ({ ...p, currentlyBanked: false })),
    );
    const nextRound = currentRound + (1 % maxRounds);
    if (currentRound === 0) {
      endGame();
      return;
    } else {
      setCurrentRound(nextRound);
      endTurn();
    }

    setCurrentRound((current) => current);
    setCurrentRoll(0);
    endTurn();
  };

  const handleRoll = useCallback(
    (number: number) => {
      if (currentRoll < 3) {
        setPot((current) => current + (number === 7 ? 70 : number));
      } else {
        if (number === 0) {
          setPot((current) => current * 2);
        } else if (number === 7) {
          endRound();
          return;
        } else {
          setPot((current) => current + number);
        }
      }
      setCurrentRoll(currentRoll + 1);
      endTurn();
    },
    [currentRoll, endRound, endTurn, setPot],
  );

  const bankPlayer = (playerId: string) => {
    const playerIndex = players.findIndex((p) => p.id === playerId);
    const unbankedPlayers = players.filter((p) => !p.currentlyBanked);

    setPlayers((current) =>
      current.map((p) =>
        p.id === playerId
          ? { ...p, score: p.score + pot, currentlyBanked: true }
          : p,
      ),
    );
    if (unbankedPlayers.length === 1) {
      endRound();
    } else if (playerIndex === currentTurn) {
      endTurn();
    }
  };

  const newGame = () => {
    setIsStarted(true);
    setCurrentRound(1);
    setCurrentTurn(0);
    setCurrentRoll(0);
    setPot(0);
    setPlayers([]);
  };

  const restartGame = () => {
    setCurrentRound(1);
    setCurrentTurn(0);
    setCurrentRoll(0);
    setPot(0);
    setPlayers((current) =>
      current.map((p) => ({ ...p, score: 0, currentlyBanked: false })),
    );
  };

  return {
    isStarted,
    startGame: () => setIsStarted(true),
    endGame: () => setIsStarted(false),
    currentRound,
    endRound,
    currentTurn,
    currentRoll,
    endTurn,
    pot,
    handleRoll,
    maxRounds,
    setMaxRounds,
    bankPlayer,
    gameOver: currentRound > maxRounds,
    newGame,
    restartGame,
  };
}

export function usePlayers() {
  const {
    playersState: [players, setPlayers],
    focusedPlayerIndexState: [focusedPlayerIndex, setFocusedPlayerIndex],
  } = useContext(GameContext);

  const addPlayer = useCallback(
    (player: Omit<Player, "id">, index = players.length) => {
      setPlayers((current) => {
        const next = [...current];
        next.splice(index, 0, { ...player, id: crypto.randomUUID() });
        return next;
      });

      setFocusedPlayerIndex(index ?? players.length);
    },
    [players.length, setPlayers, setFocusedPlayerIndex],
  );

  const removePlayer = useCallback(
    (id: string) => {
      const index = players.findIndex((p) => p.id === id);
      if (index === -1) return;
      setPlayers((current) =>
        current.slice(0, index).concat(current.slice(index + 1)),
      );
      setFocusedPlayerIndex(
        index !== undefined ? Math.max(0, index - 1) : players.length - 2,
      );
    },
    [setPlayers, players, setFocusedPlayerIndex],
  );

  const updatePlayer = useCallback(
    (index: number, player: Player) => {
      setPlayers((current) =>
        current.map((p, i) => (i === index ? player : p)),
      );
    },
    [setPlayers],
  );

  return {
    players,
    setPlayers,
    addPlayer,
    removePlayer,
    updatePlayer,
    focusedPlayerIndex,
  };
}
