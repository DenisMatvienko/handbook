/**
 *      useInfiniteScroll
 *       - hook which allow use infinite scroll in lists
 *       Intersection_Observer_API - allow to watch for elements advent. Allow to create images
 *       lazy-loading, infinite scroll etc...
 *
 *       Observer will be mounted when callback != undefined
 *
 *       @param callback;
 *          - Callback which should be called, when crossed 'triggerRef'
 *
 *       @param triggerRef
 *          - Indicates what we will monitor
 *          'MutableRefObject' has type using in useRef hook
 *
 *       @param wrapperRef
 *          - root: the element it contains scroll
 *
 *       @param IntersectionObserver
 *          - In this hook, call when display(viewport) contact with triggerRef. When we are add
 *          'IntersectionObserver' in 'observer.current' it works callback, which will added
 *          in this hook as args
 *
 *          Example:
 *            If in IntersectionObserver add, 'console.log('hello')', when on page viewport
 *            contact with triggerRef in console will show 'hello'
 *
 *          - Allow to observe at behavior of elements, realise lazy-loading of images,
 *          infinite scroll's, etc..
 *          options object see more by link:
 *          https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
 *
 *       @param options
 *          - root: the element it contains scroll
 *
 *       @param observer
 *          - callback, contains 2 args:
 *          entry: array of elements by which observing
 *          options: observer options
 *
 *        @note Suppress when unmount observer
 *          - Eslint didn't understand that triggerRef is object, link on which never change
 *          And this will not trigger useEffect once again - according this can ignore;
 *
 *
 */
import { MutableRefObject, useEffect, useRef } from 'react';

export interface UseInfiniteScrollOptions {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll({ callback, triggerRef, wrapperRef }: UseInfiniteScrollOptions) {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (callback) {
      const options = {
        rootMargin: '0px',
        threshold: 1.0,
      };

      observer.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      observer.current.observe(triggerRef.current);
    }

    // return () => {
    //   if (observer.current) {
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    //     observer.current.unobserve(triggerRef.current);
    //   }
    // };
  }, [callback, observer, triggerRef, wrapperRef]);
}
