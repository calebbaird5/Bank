import { useState } from "react";
import { useGameContext } from "@/context";
import StartGameMenu from "./StartGameMenu";
import PlayGame from "./PlayGame";
import Header from "./Header";
import Podium from "./Podium";

export default function Game() {
  const { isStarted, gameOver } = useGameContext();

  const [startDialogIsOpen, setStartDialogIsOpen] = useState(false);

  return (
    <>
      <Header
        startDialogIsOpen={startDialogIsOpen}
        setStartDialogIsOpen={setStartDialogIsOpen}
      />
      {!isStarted && (
        <StartGameMenu setStartDialogIsOpen={setStartDialogIsOpen} />
      )}
      {isStarted && !gameOver && <PlayGame />}
      {gameOver && <Podium />}
    </>
  );
}
