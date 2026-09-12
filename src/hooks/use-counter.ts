'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

interface UseCounterOptions {
  start?: number;
  end: number;
  duration?: number;
  delay?: number;
  enabled?: boolean;
  decimals?: number;
}

export function useCounter({
  start = 0,
  end,
  duration = 2000,
  delay = 0,
  enabled = true,
  decimals = 0,
}: UseCounterOptions): number {
  const [count, setCount] = useState(start);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const animate = useCallback(
    (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = start + (end - start) * eased;

      setCount(Number(current.toFixed(decimals)));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    },
    [start, end, duration, decimals]
  );

  useEffect(() => {
    if (!enabled) {
      setCount(start);
      return;
    }

    const timer = setTimeout(() => {
      rafRef.current = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timer);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      startTimeRef.current = null;
    };
  }, [enabled, animate, delay, start]);

  return count;
}
