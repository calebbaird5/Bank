import { useGameContext, usePlayers } from "@/context";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Banknote } from "lucide-react";
import type { DialogRootActions } from "@base-ui/react";
import { useEffect, useRef } from "react";

export default function Header({
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
    <section className="flex justify-between items-center p-1">
      <Button
        variant="ghost"
        color="primary"
        className="w-25"
        onClick={() => addPlayer({ name: "", score: 0 })}
      >
        Add Player
      </Button>

      <h3>Bank</h3>
      <Dialog open={startDialogIsOpen} onOpenChange={setStartDialogIsOpen}>
        {!isStarted && (
          <DialogTrigger
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
        <DialogContent>
          <p>How many rounds?</p>
          <RadioGroup
            className="flex gap-2 w-full justify-around"
            value={maxRounds}
            onValueChange={(value) => setMaxRounds(Number(value))}
            onKeyDown={(e) => e.key === "Enter" && handleStartGame()}
          >
            <RadioGroupItem value={10}>10</RadioGroupItem>
            <RadioGroupItem value={15}>15</RadioGroupItem>
            <RadioGroupItem value={20}>20</RadioGroupItem>
          </RadioGroup>
          <Button variant="ghost" color="primary" onClick={handleStartGame}>
            Start
          </Button>
        </DialogContent>
      </Dialog>
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
