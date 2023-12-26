/**
 *    Page-component.
 *      - Page wrapper using indentations for all pages.
 *
 *      Recommended wrap all pages in this component.
 *
 *      also import useInfiniteScroll
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
  memo, MutableRefObject, UIEvent, ReactNode, useRef, useEffect, useState,
} from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import classes from './Page.module.scss';

interface PageProps {
    className?: string;
    children?: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = (props: PageProps) => {
  const { className, children, onScrollEnd } = props;
  const { t } = useTranslation();
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  const onScroll = (e: UIEvent<HTMLDivElement>) => {
    console.log('scroll', e.currentTarget.scrollTop);
  };

  return (
      <section
          ref={wrapperRef}
          className={classNames(classes.Page, {}, [className])}
          onScroll={onScroll}
      >
          { children }
          <div ref={triggerRef} />
      </section>
  );
};
