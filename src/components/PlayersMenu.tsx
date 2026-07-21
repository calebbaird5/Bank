import { useGameContext, usePlayers, type Player } from "@/context";
import { Input } from "./ui/input";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ComponentProps,
  type Dispatch,
  type SetStateAction,
} from "react";
import { GripHorizontal, Trash, UserPlus } from "lucide-react";
import { Button } from "./ui/button";
import { useKeyIsPressed } from "@/hooks/useKeyIsPressed";
import { isSortable, useSortable } from "@dnd-kit/react/sortable";
import { DragDropProvider } from "@dnd-kit/react";
import { Dialog, DialogContent } from "./ui/dialog";

type OnDragEnd = NonNullable<
  ComponentProps<typeof DragDropProvider>["onDragEnd"]
>;
type DragEndEvent = Parameters<OnDragEnd>[0];

export default function PlayersMenu({
  setStartDialogIsOpen,
}: {
  setStartDialogIsOpen?: Dispatch<SetStateAction<boolean>>;
}) {
  const { players, setPlayers, addPlayer } = usePlayers();
  const { isStarted } = useGameContext();

  const handleDragEnd = (event: DragEndEvent) => {
    if (event.canceled) return;

    const { source } = event.operation;

    if (isSortable(source)) {
      const { initialIndex, index } = source;

      if (initialIndex !== index) {
        setPlayers((items) => {
          const newItems = [...items];
          const [removed] = newItems.splice(initialIndex, 1);
          newItems.splice(index, 0, removed);
          return newItems;
        });
      }
    }
  };

  const minPlayerScore = useMemo(() => {
    return players.reduce(
      (acc, cur) => Math.min(cur.score, acc),
      Number.POSITIVE_INFINITY,
    );
  }, [players]);

  const [startPlayerScoreDialogIsOpen, setStartPlayerScoreDialogIsOpen] =
    useState(false);

  const addNewPlayer = (score = 0) => {
    addPlayer({ name: "", score });
    setStartPlayerScoreDialogIsOpen(false);
  };

  return (
    <DragDropProvider onDragEnd={handleDragEnd}>
      <section className="px-1 flex flex-col items-end">
        <ul className="w-full">
          {players.map((player, index) => (
            <PlayerItem
              key={player.id}
              player={player}
              index={index}
              setStartDialogIsOpen={setStartDialogIsOpen}
            />
          ))}
        </ul>
        {isStarted && (
          <Button
            variant="ghost"
            size="icon"
            className="mx-1"
            onClick={() =>
              minPlayerScore > 0
                ? setStartPlayerScoreDialogIsOpen(true)
                : addNewPlayer(0)
            }
          >
            <UserPlus />
          </Button>
        )}
        <Dialog
          open={startPlayerScoreDialogIsOpen}
          onOpenChange={setStartPlayerScoreDialogIsOpen}
        >
          <DialogContent>
            Start New Player at:
            <Button onClick={() => addNewPlayer(0)}>0</Button>
            <Button onClick={() => addNewPlayer(minPlayerScore)}>
              lowest score
            </Button>
          </DialogContent>
        </Dialog>
      </section>
    </DragDropProvider>
  );
}

function PlayerItem({
  player,
  index,
  setStartDialogIsOpen,
}: {
  player: Player;
  index: number;
  setStartDialogIsOpen?: Dispatch<SetStateAction<boolean>>;
}) {
  const { ref } = useSortable({ id: player.id, index });
  const { players, addPlayer, removePlayer, updatePlayer, focusedPlayerIndex } =
    usePlayers();
  const { isStarted } = useGameContext();
  const commandIsPressed = useKeyIsPressed("Meta");
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    switch (e.key) {
      case "Enter":
        if (isStarted) return;
        if (commandIsPressed) {
          if (players.length > 1 && players.every(({ name }) => name.length)) {
            setStartDialogIsOpen?.(true);
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
        size="icon"
        className="mx-1"
      >
        <Trash />
      </Button>
    </li>
  );
}
