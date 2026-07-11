import { useCallback, useContext } from "react";
import { GameContext, type Player } from "./context";

export function usePlayers() {
  const {
    playersState: [players, setPlayers],
  } = useContext(GameContext);

  const addPlayer = useCallback(
    (player: Omit<Player, "id">, index = players.length) => {
      setPlayers((current) => {
        const next = [...current];
        next.splice(index, 0, {
          ...player,
          id: crypto.randomUUID(), // or however you generate IDs
        });
        return next;
      });
    },
    [players.length, setPlayers],
  );

  const removePlayer = useCallback(
    (index: number) => {
      setPlayers((current) => current.filter((_, i) => i !== index));
    },
    [setPlayers],
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
  };
}
