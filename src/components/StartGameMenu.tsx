import { GameContext, usePlayers, type Player } from "@/context";
import { Input } from "./ui/input";
import { useContext, useEffect, useRef } from "react";
import { GripHorizontal, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { useKeyIsPressed } from "@/hooks/useKeyIsPressed";
import { useSortable } from "@dnd-kit/react/sortable";

export default function StartGameMenu() {
  const { players } = usePlayers();

  return (
    <section>
      <ul className="mx-1">
        {players.map((player, index) => (
          <PlayerItem key={player.id} player={player} index={index} />
        ))}
      </ul>
    </section>
  );
}

function PlayerItem({ player, index }: { player: Player; index: number }) {
  const { ref } = useSortable({ id: player.id, index });
  const { players, addPlayer, removePlayer, updatePlayer, focusedPlayerIndex } =
    usePlayers();
  const { startGame } = useContext(GameContext);
  const commandIsPressed = useKeyIsPressed("Meta");
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    switch (e.key) {
      case "Enter":
        if (commandIsPressed) {
          if (players.length > 1 && players.every(({ name }) => name.length)) {
            startGame();
          }
          break;
        }

        addPlayer({ name: "", score: 0 }, index + 1);

        // move focus to the new input
        setTimeout(() => {
          const nextInput = document.querySelectorAll(
            'input[data-slot="input"]',
          )[index + 1] as HTMLInputElement | undefined;
          nextInput?.focus();
        }, 0);
        break;
      case "Backspace":
        if (players[index].name === "") {
          removePlayer(players[index].id);
          e.preventDefault();
        }
        break;

      case "ArrowUp":
        if (index > 0) {
          inputRef.current?.focus();
        }
        break;
      case "ArrowDown":
        if (index < players.length - 1) {
          inputRef.current?.focus();
        }
        break;
    }
  };

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (
      inputRef?.current &&
      focusedPlayerIndex !== null &&
      focusedPlayerIndex !== undefined
    ) {
      inputRef.current?.focus();
    }
  }, [focusedPlayerIndex]);

  return (
    <li className="flex items-center" ref={ref}>
      <GripHorizontal className="mr-2 cursor-grab" />
      <Input
        value={player.name}
        variant="underline"
        ref={inputRef}
        onKeyDown={(e) => handleKeyDown(e, index)}
        onChange={(e) =>
          updatePlayer(index, { ...player, name: e.target.value })
        }
      />
      <Button
        variant="ghost"
        color="secondary"
        onClick={() => removePlayer(player.id)}
      >
        <Trash />
      </Button>
    </li>
  );
}
