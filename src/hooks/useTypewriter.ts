import { useState, useEffect, useRef } from "react";

interface UseTypewriterOptions {
  text: string;
  speed?: number;
  startDelay?: number;
  onComplete?: () => void;
}

interface UseTypewriterReturn {
  displayText: string;
  isComplete: boolean;
}

export function useTypewriter({
  text,
  speed = 60,
  startDelay = 0,
  onComplete,
}: UseTypewriterOptions): UseTypewriterReturn {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const indexRef = useRef(0);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    indexRef.current = 0;
    setDisplayText("");
    setIsComplete(false);

    const startTimer = setTimeout(() => {
      const interval = setInterval(() => {
        const nextIndex = indexRef.current + 1;
        setDisplayText(text.slice(0, nextIndex));
        indexRef.current = nextIndex;

        if (nextIndex >= text.length) {
          clearInterval(interval);
          setIsComplete(true);
          onCompleteRef.current?.();
        }
      }, speed);

      return () => clearInterval(interval);
    }, startDelay);

    return () => clearTimeout(startTimer);
  }, [text, speed, startDelay]);

  return { displayText, isComplete };
}
