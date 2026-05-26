import { useEffect, useRef, useState } from "react";

// Animates a numeric string to its final value on mount (once in viewport)
export function useCounter(target: string, duration = 1200) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const numericMatch = target.match(/[\d.]+/);
    if (!numericMatch) {
      setDisplay(target);
      return;
    }

    const numeric = parseFloat(numericMatch[0]);
    const prefix = target.slice(0, target.indexOf(numericMatch[0]));
    const suffix = target.slice(target.indexOf(numericMatch[0]) + numericMatch[0].length);
    const isFloat = numericMatch[0].includes(".");
    const decimals = isFloat ? (numericMatch[0].split(".")[1]?.length ?? 0) : 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();

          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // easeOut cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * numeric;
            setDisplay(prefix + current.toFixed(decimals) + suffix);
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration]);

  return { display, ref };
}
