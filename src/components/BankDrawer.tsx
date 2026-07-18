import { Banknote } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { Button } from "./ui/button";
import { useGameContext, usePlayers, type Player } from "@/context";
import { useCallback, useEffect, useState } from "react";

function getLocalPlayer(player: Player) {
  return { ...player, isAlreadyBanked: player.currentlyBanked };
}

export default function BankDrawer() {
  const { isStarted, bankPlayer, pot } = useGameContext();
  const { players } = usePlayers();

  const [localPlayers, setLocalPlayers] = useState(players.map(getLocalPlayer));
  console.log("localPlayers", localPlayers);

  useEffect(
    () => setLocalPlayers(players.map(getLocalPlayer)),
    [setLocalPlayers, players],
  );

  const syncBankedState = useCallback(() => {
    if (players.length !== localPlayers.length)
      throw new Error("player lists don't match");

    for (let i = 0; i < players.length; ++i) {
      if (players[i].currentlyBanked) continue;
      if (localPlayers[i].id !== players[i].id)
        throw new Error(`players[${i}].id !== localPlayers[${i}].id`);
      if (localPlayers[i].currentlyBanked) bankPlayer(localPlayers[i].id);
    }
  }, [players, localPlayers]);

  const localToggleBanked = (index: number) => {
    setLocalPlayers((prev) =>
      prev.map((player, i) =>
        i === index
          ? { ...player, currentlyBanked: !player.currentlyBanked }
          : player,
      ),
    );
  };

  const getDisplayedScore = (player: ReturnType<typeof getLocalPlayer>) => {
    let score = player.score;
    if (!player.isAlreadyBanked && player.currentlyBanked) score += pot;
    return score;
  };

  return (
    <Drawer modal={false} onOpenChange={syncBankedState}>
      {isStarted && (
        <DrawerTrigger render={<Button />}>
          Bank <Banknote className="ml-1" />
        </DrawerTrigger>
      )}
      <DrawerContent className="p-5 rounded-t-none rounded-l-none rounded-r-none">
        <ul className="flex flex-col gap-2">
          {localPlayers.map((player, i) => (
            <li key={player.id}>
              <Button
                variant={player.currentlyBanked ? "solid" : "outline"}
                className="w-full flex items-center justify-between  px-2 py-1 rounded-md"
                onClick={() => localToggleBanked(i)}
                disabled={player.isAlreadyBanked}
              >
                <span> {player.name} </span>
                <span>{getDisplayedScore(player)}</span>
              </Button>
            </li>
          ))}
        </ul>
      </DrawerContent>
    </Drawer>
  );
}
