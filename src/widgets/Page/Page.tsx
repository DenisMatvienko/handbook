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

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
  MutableRefObject, ReactNode, UIEvent, useRef, useState,
} from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { ScrollRestorationActions } from 'features/scroll/ScrollRestoration';
import { useLocation } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { getScrollRestorationBypath } from 'features/scroll/ScrollRestoration/model/selectors/GetScrollRestoration';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/provider/StoreProvider';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';
import classes from './Page.module.scss';

interface PageProps {
    className?: string;
    children?: ReactNode;
    emptyLayout?: boolean;
    onScrollEnd?: () => void;
}

export const Page = (props: PageProps) => {
  const {
    className,
    children,
    emptyLayout = false,
    onScrollEnd,
  } = props;
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

  if (emptyLayout) {
    return (
        <section
            ref={wrapperRef}
            className={classNames(classes.page__empty, {}, [className])}
            onScroll={onScroll}
        >
            { children }
            {onScrollEnd ? <div className={classes.page__trigger} ref={triggerRef} /> : null}
        </section>
    );
  }

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
                  {onScrollEnd ? <div className={classes.page__trigger} ref={triggerRef} /> : null}
              </div>
          </div>
      </section>
  );
};
