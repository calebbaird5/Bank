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
    gameOver,
    newGame,
    restartGame,
  } = useGameContext();
  const { players, addPlayer } = usePlayers();

  const handleStartGame = () => {
    startGame();
    setStartDialogIsOpen(false);
  };

  /* const bankRef = useRef<DialogRootActions>(null);
   * useEffect(() => void bankRef.current?.close(), [currentRound]); */

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
              />
            }
          >
            Start Game
          </DrawerTrigger>
        )}
        <DrawerContent>
          <DrawerHeader className="mb-3">How many rounds?</DrawerHeader>
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
