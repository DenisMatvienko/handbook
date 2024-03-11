/**
 *      useDebounce
 *        - As example: block didn't fetch request, while 'args' didn't stop writing;
 *
 *      @param { ...args[] } void
 *      @param { delay } number
 *      @return { ...args }
 */

import { MutableRefObject, useCallback, useRef } from 'react';

export function useDebounce(callback: (...args: any[]) => void, delay: number) {
  const timer = useRef(false) as MutableRefObject<any>;

  return useCallback((...args: any[]) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }, [callback, delay]);
}
