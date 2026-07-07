import { useEffect, useState } from "react";

export function useKeyIsPressed(key: string) {
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === key) {
        setIsPressed(true);
      }
    }

    function handleKeyUp(event: KeyboardEvent) {
      if (event.key === key) {
        setIsPressed(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [key]);

  return isPressed;
}
