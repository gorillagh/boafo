import { useEffect, useRef } from 'react';
import gsap from 'gsap';
export function useEntrance() {
  const ref = useRef(null);
  useEffect(() => {
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const context = gsap.context(() => { gsap.from('[data-reveal]', { y: 22, opacity: 0, duration: .65, stagger: .08, ease: 'power2.out', clearProps: 'all' }); }, ref);
      return () => context.revert();
    });
    return () => media.revert();
  }, []);
  return ref;
}
