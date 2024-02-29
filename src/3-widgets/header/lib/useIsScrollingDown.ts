import { useEffect, useState } from 'react';

export function useIsScrollingDown() {
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    let lastYPosition = window.scrollY;

    const handleScroll = () => {
      const currentYPosition = window.scrollY;
      const currentIsScrollingDown = currentYPosition > lastYPosition;

      if (
        currentIsScrollingDown !== isScrollingDown &&
        Math.abs(currentYPosition - lastYPosition) > 8
      ) {
        setIsScrollingDown(currentIsScrollingDown);
      }

      lastYPosition = currentYPosition > 0 ? currentYPosition : 0;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrollingDown]);

  return isScrollingDown;
}
