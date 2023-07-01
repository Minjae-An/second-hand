import { useEffect, useState } from 'react';

interface UseIntersectionObserverProps {
  intersectHandler: IntersectionObserverCallback;
  root?: null;
  rootMargin?: string;
  threshold?: number;
}

const useIntersectionObserver = ({
  intersectHandler,
  root = null,
  rootMargin = '0px',
  threshold = 0,
}: UseIntersectionObserverProps) => {
  const [target, setTarget] = useState<HTMLDivElement | null | undefined>(null);

  useEffect(() => {
    if (!target) return;

    const observer = new IntersectionObserver(intersectHandler, {
      root,
      rootMargin,
      threshold,
    });

    observer.observe(target);

    return () => observer.disconnect();
  }, [target, intersectHandler, root, rootMargin, threshold]);

  return { setTarget };
};

export default useIntersectionObserver;
