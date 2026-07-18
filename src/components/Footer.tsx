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
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

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

  const handleStartGame = () => {
    startGame();
    setStartDialogIsOpen(false);
  };

  return (
    <section
      className={cn(
        "flex justify-between items-center p-1 pb-4 ios:mb-4",
        className,
      )}
      {...props}
    >
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
              />
            }
          >
            Start Game
          </DrawerTrigger>
        )}
        <DrawerContent>
          <DrawerHeader className="mb-3 ios:mb-6">
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
