import { useGameContext, usePlayers, type Player } from "@/context";
import { Card, CardContent } from "./ui/card";
import { cn } from "@/lib/utils";
import { useDoubleTap } from "@/hooks/useDoubleTap";

export default function ScoreBoard() {
  const { players } = usePlayers();

  return (
    <Card className="w-full max-w-[300px] sm:min-h-[228px]">
      <CardContent>
        <h2>Scoreboard</h2>
        <ul className="flex flex-col gap-2">
          {players
            .sort((a, b) => b.score - a.score)
            .map((player) => (
              <ScoreBoardItem key={player.id} player={player} />
            ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function ScoreBoardItem({ player }: { player: Player }) {
  const { pot, bankPlayer } = useGameContext();
  const ref = useDoubleTap(() => bankPlayer(player.id));

  return (
    <li
      className={cn(
        "flex items-center justify-between bg-background px-2 py-1 rounded-md",
        { "bg-primary text-primary-foreground": player.currentlyBanked },
      )}
      ref={ref}
    >
      <span>{player.name}</span>
      <span>
        {player.score}
        <span className="text-muted-foreground text-xs">
          {!player.currentlyBanked && ` (${player.score + pot})`}
        </span>
      </span>
    </li>
  );
}
