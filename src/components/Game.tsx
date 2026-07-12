import { useGameContext } from "@/context";
import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import PlayGame from "./PlayGame";
import Podium from "./Podium";
import StartGameMenu from "./StartGameMenu";

export default function Game() {
  const { isStarted, gameOver } = useGameContext();

  const [startDialogIsOpen, setStartDialogIsOpen] = useState(false);

  return (
    <div className="px-2 min-h-screen flex flex-col justify-between">
      <Header />
      {isStarted && !gameOver && <PlayGame />}
      {gameOver && <Podium />}
      <div className="flex-1"></div>
      {!isStarted && (
        <StartGameMenu setStartDialogIsOpen={setStartDialogIsOpen} />
      )}
      <Footer
        startDialogIsOpen={startDialogIsOpen}
        setStartDialogIsOpen={setStartDialogIsOpen}
      />
    </div>
  );
}
