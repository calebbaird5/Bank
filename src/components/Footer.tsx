import { useGameContext, usePlayers } from "@/context";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Banknote } from "lucide-react";
import { useEffect, useRef } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "./ui/drawer";
import { SegmentedControl, SegmentedControlItem } from "./SegmentedControl";

export default function Footer({
  startDialogIsOpen,
  setStartDialogIsOpen,
}: {
  startDialogIsOpen: boolean;
  setStartDialogIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const {
    isStarted,
    maxRounds,
    setMaxRounds,
    startGame,
    bankPlayer,
    currentRound,
    gameOver,
    newGame,
    restartGame,
  } = useGameContext();
  const { players, addPlayer } = usePlayers();

  const handleStartGame = () => {
    startGame();
    setStartDialogIsOpen(false);
  };

  const bankRef = useRef<DialogRootActions>(null);
  useEffect(() => void bankRef.current?.close(), [currentRound]);

  return (
    <section className="flex justify-between items-center p-1 pb-4">
      <Button
        variant="ghost"
        color="primary"
        className="w-25"
        onClick={() => addPlayer({ name: "", score: 0 })}
      >
        Add Player
      </Button>

      <Drawer open={startDialogIsOpen} onOpenChange={setStartDialogIsOpen}>
        {!isStarted && (
          <DrawerTrigger
            render={
              <Button
                variant="ghost"
                color="primary"
                disabled={players.length < 2 || players.some((p) => !p.name)}
              >
                Start Game
              </Button>
            }
          />
        )}
        <DrawerContent>
          <DrawerHeader className="mb-3">How many rounds?</DrawerHeader>
          <DrawerDescription className="mb-3">
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
          </DrawerDescription>
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
      {!gameOver && (
        <Dialog actionsRef={bankRef}>
          {isStarted && (
            <DialogTrigger
              render={
                <Button>
                  Bank <Banknote className="ml-1" />
                </Button>
              }
            />
          )}
          <DialogContent className="pt-10">
            <ul className="flex flex-col gap-2">
              {players.map((player) => (
                <li key={player.id}>
                  <Button
                    variant="ghost"
                    className="w-full flex items-center justify-between bg-background px-2 py-1 rounded-md"
                    onClick={() => bankPlayer(player.id)}
                    disabled={player.currentlyBanked}
                  >
                    <span> {player.name} </span>
                    <span>{player.score}</span>
                  </Button>
                </li>
              ))}
            </ul>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
