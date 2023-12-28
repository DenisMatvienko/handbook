/**
 *    Page-component.
 *      - Page wrapper using indentations for all pages.
 *
 *      Recommended wrap all pages in this component.
 *
 *      also import useInfiniteScroll
 *
 *      @param onScroll;
 *          - All components as "Navbar", "Sidebar", "ButtonToTop" added into "Page".
 *          Because on page need control scroll for useThrottle.
 *          On body scrollbar not needed anymore.
 *          https://qna.habr.com/q/923999
 *
 *      @param onScrollEnd;
 *          - Callback which called when scroll end.
 *
 *      @param triggerRef;
 *          - When cross triggerRef, after that trigger callback named 'onScrollEnd'.
 *
 *      @param wrapperRef;
 *          - Wrapper which should contain scroll
 */

import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
  memo, MutableRefObject, UIEvent, ReactNode, useRef, useState,
} from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { ButtonToTop } from 'shared/ui/ButtonToTop/ButtonToTop';
import classes from './Page.module.scss';

interface PageProps {
    className?: string;
    children?: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = (props: PageProps) => {
  const { className, children, onScrollEnd } = props;
  const { t } = useTranslation();
  const [showNav, setShowNav] = useState(false);
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  const onScroll = (e: UIEvent<HTMLDivElement>) => {
    if (e.currentTarget.scrollTop > 10) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }

    console.log('scroll', e.currentTarget.scrollTop);
    // dispatch(ScrollRestorationActions.setScrollPosition({
    //   position: e.currentTarget.scrollTop,
    //   path: 'asdasd',
    // }));
  };

  return (
      <section
          ref={wrapperRef}
          className={classNames(classes.Page, {}, [className])}
          onScroll={onScroll}
      >
          <Navbar isDisplay={showNav} />
          <div className={classes.contentPage}>
              <Sidebar />
              <div
                  className={classNames(classes.content, {}, [className])}
              >
                  { children }
                  <div ref={triggerRef} />
              </div>
          </div>
      </section>
  );
};
