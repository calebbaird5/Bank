import { useState } from "react";
import "./App.css";
import Game from "./components/Game";
import { GameContext, type Player } from "./context";

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const playersState = useState<Player[]>([]);
  const focusedPlayerIndexState = useState<number | null>(null);

  return (
    <GameContext
      value={{
        isStarted,
        startGame: () => setIsStarted(true),
        endGame: () => setIsStarted(false),
        playersState,
        focusedPlayerIndexState,
      }}
    >
      <Game />
    </GameContext>
  );
}

export default App;
