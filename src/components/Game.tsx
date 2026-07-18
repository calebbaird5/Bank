import { useGameContext } from "@/context";
import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import PlayGame from "./PlayGame";
import Podium from "./Podium";
import StartGameMenu from "./StartGameMenu";
import { Landmark } from "lucide-react";

export default function Game() {
  const { isStarted, gameOver } = useGameContext();

  const [startDialogIsOpen, setStartDialogIsOpen] = useState(false);

  return (
    <div className="px-2 min-h-screen flex flex-col pb-15">
      <Header />
      {isStarted && !gameOver && <PlayGame />}

      {!isStarted && !gameOver && (
        <div className="flex-1 flex flex-col justify-center items-center gap-4">
          <Landmark className=" w-screen h-screen absolute opacity-10 pointer-events-none" />
          <div className="flex items-center text-[80px]">
            B
            <Landmark className="text-primary h-20 w-20" />
            NK
          </div>
        </div>
      )}
      {gameOver && <Podium />}
      <div></div>
      {!isStarted && (
        <StartGameMenu setStartDialogIsOpen={setStartDialogIsOpen} />
      )}
      <Footer
        className="fixed bottom-0 left-0 right-0 bg-background pt-2"
        startDialogIsOpen={startDialogIsOpen}
        setStartDialogIsOpen={setStartDialogIsOpen}
      />
    </div>
  );
}
