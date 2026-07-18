import { useGameContext } from "@/context";
import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import PlayGame from "./PlayGame";
import Podium from "./Podium";
import StartGameMenu from "./StartGameMenu";
import { Dices, Landmark } from "lucide-react";

export default function Game() {
  const { isStarted, gameOver } = useGameContext();

  const [startDialogIsOpen, setStartDialogIsOpen] = useState(false);

  return (
    <div className="px-2 min-h-screen flex flex-col ">
      <Header />
      {isStarted && !gameOver && <PlayGame />}

      {!isStarted && !gameOver && (
        <div className="flex-1 flex flex-col justify-center items-center gap-4">
          <Landmark className="text-primary h-20 w-20" />
          <Dices className="text-primary h-10 w-10" />
        </div>
      )}
      {gameOver && <Podium />}
      <div></div>
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
