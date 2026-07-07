import { useContext } from "react";
import { Button } from "./ui/button";
import { GameContext, usePlayers } from "@/context";
import StartGameMenu from "./StartGameMenu";

export default function Game() {
  const { isStarted, startGame } = useContext(GameContext);
  const { players, addPlayer } = usePlayers();

  return (
    <>
      <section className="flex  justify-between">
        {!isStarted && players.length > 1 ? (
          <Button variant="ghost" color="primary" onClick={startGame}>
            Start Game
          </Button>
        ) : (
          <span className="w-25"></span>
        )}
        <span>Bank</span>
        <Button
          variant="ghost"
          color="primary"
          className="w-25"
          onClick={() => addPlayer({ name: "", score: 0 })}
        >
          Add Player
        </Button>
      </section>
      {!isStarted && <StartGameMenu />}
    </>
  );
}
