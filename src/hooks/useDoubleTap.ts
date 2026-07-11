import { useEffect, useRef, useState } from "react";

export function useDoubleTap<T extends HTMLElement>(
  onDoubleTap: () => void,
  delay = 300,
) {
  const [node, setNode] = useState<T | null>(null);

  const lastTap = useRef(0);

  useEffect(() => {
    if (!node) return;

    const handlePointerUp = (e: PointerEvent) => {
      // Ignore right-clicks, etc.

      if (e.pointerType === "mouse" && e.button !== 0) return;

      const now = performance.now();

      if (now - lastTap.current < delay) {
        lastTap.current = 0;

        onDoubleTap();
      } else {
        lastTap.current = now;
      }
    };

    node.addEventListener("pointerup", handlePointerUp);

    return () => {
      node.removeEventListener("pointerup", handlePointerUp);
    };
  }, [node, onDoubleTap, delay]);

  return setNode;
}
