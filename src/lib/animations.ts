import gsap from 'gsap';

export const ANIMATION_PRESETS = {
  fadeUp: {
    from: { opacity: 0, y: 40 },
    to: { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
  },
  fadeDown: {
    from: { opacity: 0, y: -40 },
    to: { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
  },
  fadeLeft: {
    from: { opacity: 0, x: -40 },
    to: { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' },
  },
  fadeRight: {
    from: { opacity: 0, x: 40 },
    to: { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' },
  },
  scaleIn: {
    from: { opacity: 0, scale: 0.95 },
    to: { opacity: 1, scale: 1, duration: 0.6, ease: 'power2.out' },
  },
  slideUp: {
    from: { y: 60, opacity: 0 },
    to: { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
  },
} as const;

export const STAGGER = {
  fast: 0.05,
  normal: 0.1,
  slow: 0.15,
  section: 0.2,
} as const;

export function createScrollFadeUp(
  element: HTMLElement | string,
  options?: {
    delay?: number;
    stagger?: number;
    duration?: number;
  }
) {
  return gsap.from(element, {
    opacity: 0,
    y: 40,
    duration: options?.duration ?? 0.8,
    delay: options?.delay ?? 0,
    stagger: options?.stagger ?? 0,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
  });
}

export function createStaggerReveal(
  container: HTMLElement,
  children: string,
  options?: {
    delay?: number;
    stagger?: number;
  }
) {
  return gsap.from(container.querySelectorAll(children), {
    opacity: 0,
    y: 30,
    duration: 0.6,
    delay: options?.delay ?? 0,
    stagger: options?.stagger ?? STAGGER.normal,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: container,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });
}
