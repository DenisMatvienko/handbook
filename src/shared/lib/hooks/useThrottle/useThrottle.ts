/**
 *      useThrottle
 *          - Throttling hook, allows you to set the delay time for messages. How often you can run callback - in which will
 *            be implemented function which run this messages
 *
 *          - callback runs in the period of times, which add as 'delay' arg
 *
 *      As example:
 *          When often scroll page and gave dispatch on this scroll event, or log into console message
 *          in redux dev tools or in console.
 *          - Every when you will scroll page, in this time will get many messages with
 *            scroll parameters in dev tools or in console
 *          - This hook allows you to set the delay time for messages. How often you can run callback - in which will
 *            be implemented function which run this messages
 *
 *      How it works:
 *          @param throttleRef:
 *              - Show can run call back or not (default - false)
 *
 *          - Run callback which give as arg
 *          - When callback is run in throttleRef add - true (think callback is done)
 *          - Very important do it when throttleRef is false (therefore the condition !throttleRef.current),
 *          - When throttleRef change on - true, all the following changes will be ignored, while
 *          property of throttleRef return to - false
 *          - Returned these properties with false in timeout with delay as arg
 */

import { useCallback, useRef } from 'react';

export function useThrottle(callback: (...args: any[]) => void, delay: number) {
  const throttleRef = useRef(false);

  return useCallback((...args: any[]) => {
    if (!throttleRef.current) {
      callback(...args);
      throttleRef.current = true;

      setTimeout(() => {
        throttleRef.current = false;
      }, delay);
    }
  }, [callback, delay]);
}
