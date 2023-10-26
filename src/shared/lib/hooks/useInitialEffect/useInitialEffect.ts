/**
 *      useInitialEffect hook
 *          - Mostly using for fetching from model/service;
 *            to exclude rewriting check with global var - __PROJECT__
 *
 *      @param __PROJECT__
 *      - is mode variable, allow using some effect in different modes. Example:
 *          Storybook throw error, when use em with component which rendering by fetch from model/service.
 *          for solving this problem. Need add in 'UseEffect' check, that __PROJECT__ != storybook
 *          - if that true, can add useDispatch.
 */

import { DependencyList, useEffect } from 'react';

export function useInitialEffect(callback: ()=> void, deps: DependencyList = []) {
  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      callback();
    }
    // eslint-disable-next-line
  }, deps);
}
