import { useEffect, useState } from "react";
import "./App.css";
import Game from "./components/Game";
import { GameContext, type Player } from "./context";

function App() {
  const isStartedState = useState(false);
  const playersState = useState<Player[]>([]);
  const focusedPlayerIndexState = useState<number | null>(null);
  const currentTurnState = useState(0);
  const currentRoundState = useState(1);
  const currentRollState = useState(0);
  const potState = useState(0);
  const maxRoundsState = useState(10);

  useEffect(() => {
    const root = document.documentElement;

    const style = getComputedStyle(root);
    const backgroundColor = style.getPropertyValue("--background-color");
    const meta = document.querySelector(
      'meta[name="apple-mobile-web-app-status-bar-style"]',
    );
    if (meta) {
      meta.setAttribute("content", backgroundColor);
    } else {
      const newMeta = document.createElement("meta");
      newMeta.setAttribute("name", "apple-mobile-web-app-status-bar-style");
      newMeta.setAttribute("content", backgroundColor);
      document.head.appendChild(newMeta);
    }
  }, []);
  return (
    <GameContext
      value={{
        isStartedState,
        playersState,
        focusedPlayerIndexState,
        currentTurnState,
        currentRoundState,
        currentRollState,
        potState,
        maxRoundsState,
      }}
    >
      <Game />
    </GameContext>
  );
}

export default App;
