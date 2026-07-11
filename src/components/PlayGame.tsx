import { useGameContext, usePlayers } from "@/context";
import { Button } from "./ui/button";
import { Dices } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "./ui/card";
import ScoreBoard from "./ScoreBoard";

export default function PlayGame() {
  const { currentRound, currentRoll, handleRoll, currentTurn, pot } =
    useGameContext();
  const { players } = usePlayers();

  return (
    <section className={cn("flex flex-col items-center gap-4 p-2 flex-1")}>
      <div className="w-full flex justify-between">
        <h3> Round {currentRound}</h3>
        <h3> Roll {currentRoll}</h3>
      </div>
      <h1>{pot}</h1>
      <p> {players[currentTurn]?.name}'s turn</p>

      {/* className={cn(} */}
      <div
        className={cn(
          "flex flex-col items-center gap-4 p-2 flex-1 w-full",
          "sm:flex-row sm:justify-around sm:max-w-[800px] sm:items-start",
        )}
      >
        <ScoreBoard />
        <Card className="w-full max-w-[300px]">
          <CardContent className="grid grid-cols-4 gap-2">
            {Array.from({ length: 11 }).map((_, index) => (
              <Button
                variant="outline"
                color="secondary"
                className={cn("w-15 h-15", {
                  "border-destructive text-destructive":
                    index === 5 && currentRoll >= 3,
                })}
                key={index}
                disabled={currentRoll >= 3 && [0, 10].includes(index)}
                onClick={() => handleRoll(index + 2)}
              >
                {index + 2}
              </Button>
            ))}
            <Button
              variant="outline"
              color="secondary"
              className="w-15 h-15"
              disabled={currentRoll < 3}
              onClick={() => handleRoll(0)}
            >
              <Dices />
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
