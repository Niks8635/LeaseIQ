'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollAnimationOptions {
  animation: (tl: gsap.core.Timeline, el: HTMLElement) => void;
  trigger?: string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
  toggleActions?: string;
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: ScrollAnimationOptions
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: options.trigger ? el.querySelector(options.trigger) : el,
        start: options.start || 'top 80%',
        end: options.end || 'bottom 20%',
        scrub: options.scrub || false,
        markers: options.markers || false,
        toggleActions: options.toggleActions || 'play none none none',
      },
    });

    options.animation(tl, el);

    return () => {
      tl.kill();
    };
  }, [options]);

  return ref;
}
