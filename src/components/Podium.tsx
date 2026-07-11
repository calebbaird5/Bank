import { usePlayers } from "@/context";
import { Trophy } from "lucide-react";

export default function Podium() {
  const { players } = usePlayers();
  if (players.length === 0) return null;
  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

  return (
    <section>
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <div className="w-full flex justify-center">
            <Trophy size={50} className="text-primary mt-16 mb-2" />
          </div>
          <p className="text-xl text-primary">{sortedPlayers[0].name}</p>
          <p className="text-xl text-primary">
            Score: {sortedPlayers[0].score}
          </p>
        </div>
        <div>
          <h4 className="text-md font-semibold">Other Players</h4>
          <hr />
          <ul>
            {sortedPlayers.slice(1).map((player) => (
              <li key={player.id} className="text-md">
                {player.name} - {player.score}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
