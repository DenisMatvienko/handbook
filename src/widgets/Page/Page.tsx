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
  memo, MutableRefObject, UIEvent, ReactNode, useRef, useState, useEffect,
} from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { ButtonToTop } from 'shared/ui/ButtonToTop/ButtonToTop';
import { ScrollRestorationActions } from 'features/ScrollRestoration';
import { useLocation } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import {
  getScrollRestoration,
  getScrollRestorationBypath,
} from 'features/ScrollRestoration/model/selectors/GetScrollRestoration';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/provider/StoreProvider';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';
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
  const { pathname } = useLocation();
  const scrollPosition = useSelector(
    (state: StateSchema) => getScrollRestorationBypath(state, pathname),
  );

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;

    wrapperRef.current.addEventListener('scroll', () => {
      if (wrapperRef.current.scrollTop > 10) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    });
  });

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(ScrollRestorationActions.setScrollPosition({
      position: e.currentTarget.scrollTop,
      path: pathname,
    }));
  }, 500);

  return (
      <section
          ref={wrapperRef}
          className={classNames(classes.page, {}, [className])}
          onScroll={onScroll}
      >
          <Navbar isDisplay={showNav} />
          <div className={classes.page__wrapper}>
              <Sidebar />
              <div
                  className={classNames(classes.page__content, {}, [className])}
              >
                  { children }
                  <div ref={triggerRef} />
              </div>
          </div>
      </section>
  );
};
