import { useEffect } from 'react';

export function useScrollReset(top: number = 0, left: number = 0) {
  useEffect(() => {
    window.scrollTo({ top, left });
  }, [top, left]);
}