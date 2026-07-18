import { useGameContext, usePlayers } from "@/context";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "./ui/drawer";
import { SegmentedControl, SegmentedControlItem } from "./SegmentedControl";
import BankDrawer from "./BankDrawer";
import { useMemo, useRef, useState, type ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import type { DrawerRootActions } from "@base-ui/react";

export interface FooterProps extends ComponentProps<"section"> {
  startDialogIsOpen: boolean;
  setStartDialogIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Footer({
  startDialogIsOpen,
  setStartDialogIsOpen,
  className,
  ...props
}: FooterProps) {
  const {
    isStarted,
    maxRounds,
    setMaxRounds,
    startGame,
    gameOver,
    newGame,
    restartGame,
  } = useGameContext();
  const { players, addPlayer } = usePlayers();

  const drawerActionsRef = useRef<DrawerRootActions>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const minPlayerScore = useMemo(() => {
    return players.reduce(
      (acc, cur) => Math.min(cur.score, acc),
      Number.POSITIVE_INFINITY,
    );
  }, [players]);

  const handleStartGame = () => {
    startGame();
    setStartDialogIsOpen(false);
  };

  const handleAddPlayer = (score: number) => {
    addPlayer({ ...newPlayer, score });
    setNewPlayer({ name: "", score: 0 });
    drawerActionsRef.current?.close();
  };

  const [newPlayer, setNewPlayer] = useState({ name: "", score: 0 });

  return (
    <section
      className={cn(
        "flex justify-between items-center p-1 pb-4 ios:pb-8",
        className,
      )}
      {...props}
    >
      {!isStarted ? (
        <Button
          variant="ghost"
          color="primary"
          className="w-25"
          onClick={() => addPlayer({ name: "", score: 0 })}
        >
          Add Player
        </Button>
      ) : (
        <Drawer actionsRef={drawerActionsRef}>
          <DrawerTrigger
            render={<Button variant="ghost" color="primary" className="w-25" />}
          >
            Add Player
          </DrawerTrigger>
          <DrawerContent className="!rounded-none ios:pb-3" initialFocus>
            <Input
              value={newPlayer.name}
              variant="underline"
              ref={inputRef}
              onChange={(e) =>
                setNewPlayer((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            <div className="flex justify-around pb-2 pt-1">
              <Button onClick={() => handleAddPlayer(0)}>
                {minPlayerScore === 0 ? "Add Player" : "Start at 0"}
              </Button>
              {minPlayerScore > 0 && (
                <Button onClick={() => handleAddPlayer(minPlayerScore)}>
                  Start at {minPlayerScore}
                </Button>
              )}
            </div>
          </DrawerContent>
        </Drawer>
      )}

      <Drawer open={startDialogIsOpen} onOpenChange={setStartDialogIsOpen}>
        {!isStarted && (
          <DrawerTrigger
            render={
              <Button
                variant="ghost"
                color="primary"
                disabled={players.length < 2 || players.some((p) => !p.name)}
              />
            }
          >
            Start Game
          </DrawerTrigger>
        )}
        <DrawerContent initialFocus>
          <DrawerHeader className="pb-3 ios:pb-6">
            How many rounds?
          </DrawerHeader>
          <div className="mb-3">
            <SegmentedControl
              className="w-full px-3"
              value={String(maxRounds)}
              onValueChange={(value) => setMaxRounds(Number(value))}
              onKeyDown={(e) => e.key === "Enter" && handleStartGame()}
            >
              <SegmentedControlItem value="10">10</SegmentedControlItem>
              <SegmentedControlItem value="15">15</SegmentedControlItem>
              <SegmentedControlItem value="20">20</SegmentedControlItem>
            </SegmentedControl>
          </div>
          <DrawerFooter>
            <Button variant="ghost" color="primary" onClick={handleStartGame}>
              Start
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      {gameOver && (
        <Dialog>
          <DialogTrigger
            render={
              <Button variant="ghost" color="primary">
                Start Over
              </Button>
            }
          />
          <DialogContent>
            <Button onClick={restartGame}>Restart</Button>
            <Button onClick={newGame}>New Game</Button>
          </DialogContent>
        </Dialog>
      )}
      {!gameOver && <BankDrawer />}
    </section>
  );
}
