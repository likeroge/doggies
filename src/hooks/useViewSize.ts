import { useEffect, useRef } from 'react';

export default function useViewSize() {
  const screenSize = useRef(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      screenSize.current = window.innerWidth;
    });
    return () => {
      window.removeEventListener('resize', () => {
        screenSize.current = window.innerWidth;
      });
    };
  }, []);

  return screenSize.current;
}
