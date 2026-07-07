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
}

export interface GameContextType {
  isStarted: boolean;
  startGame: () => void;
  endGame: () => void;
  playersState: [Player[], Dispatch<SetStateAction<Player[]>>];
  focusedPlayerIndexState: [
    number | null,
    Dispatch<SetStateAction<number | null>>,
  ];
}

export const GameContext = createContext<GameContextType>({
  isStarted: false,
  startGame: () => {},
  endGame: () => {},
  playersState: [[], () => {}],
  focusedPlayerIndexState: [0, () => {}],
});

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
