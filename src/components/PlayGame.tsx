import { useGameContext, usePlayers } from "@/context";
import { Button } from "./ui/button";
import { Dices } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "./ui/card";
import ScoreBoard from "./ScoreBoard";
import { useEffect, useRef, useState } from "react";

export default function PlayGame() {
  const { currentRound, currentRoll, handleRoll, currentTurn, pot } =
    useGameContext();
  const { players } = usePlayers();

  const [renderedPot, setRenderedPot] = useState(0);
  const renderedPotRef = useRef(pot);

  // When the pot changes I want the rendered pot to "dial" to the new value.
  // To do this we will calculate up to 4 jumps between the rendered pot
  // and the new pot value. We wil then over the course of about half a second
  // update the rendered pot to those values until we finally get to the new pot
  // value. Thereby giving the impression that the pot scrolled or dialed up or
  // down rather than just instantly changing
  useEffect(() => {
    const start = renderedPotRef.current;
    const end = pot;
    if (start === end) return;

    const duration = 500;
    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(start + (end - start) * eased);

      renderedPotRef.current = value;
      setRenderedPot(value);

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [pot]);

  return (
    <section className={cn("flex flex-col items-center gap-4 p-2 flex-1")}>
      <div className="w-full flex justify-between">
        <h3> Round {currentRound}</h3>
        <h3> Roll {currentRoll}</h3>
      </div>
      <h1 className="text-4xl tabular-nms">{renderedPot}</h1>
      <p> {players[currentTurn]?.name}'s turn</p>

      <div
        className={cn(
          "flex flex-col items-center gap-4 p-2 flex-1 w-full",
          "sm:flex-row sm:justify-around sm:max-w-[800px] sm:items-start",
        )}
      >
        <Card className="w-full max-w-[300px]">
          <CardContent className="grid grid-cols-4 gap-2">
            {Array.from({ length: 11 }).map((_, index) => (
              <Button
                variant="outline"
                color={
                  index === 5 && currentRoll >= 3 ? "destructive" : "primary"
                }
                className={cn("w-12 h-12")}
                key={index}
                disabled={currentRoll >= 3 && [0, 10].includes(index)}
                onClick={() => handleRoll(index + 2)}
              >
                {index + 2}
              </Button>
            ))}
            <Button
              variant="outline"
              className="w-12 h-12"
              disabled={currentRoll < 3}
              onClick={() => handleRoll(0)}
            >
              <Dices />
            </Button>
          </CardContent>
        </Card>
        <ScoreBoard />
      </div>
    </section>
  );
}
