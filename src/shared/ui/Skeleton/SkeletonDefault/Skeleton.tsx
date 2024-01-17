/**
 *    Skeleton-component.
 *      - Loader stub, while any components is loading
 *
 *    @param height
 *      - string - when percent values
 *      - number - when 'px' values
 *
 *    @param width
 *      - string - when percent values
 *      - number - when 'px' values
 *
 *    @param border
 *      - border of skeleton
 *
 *    @param block
 *      - use for background blocks which contain all content on page
 *      - use only with 'blocks' theme
 *
 *    Themes:
 *    @param ELEMENTS
 *      - add only in blocks
 *
 *    @param BLOCKS
 *      - could contain element
 *      - use only with 'block' param
 */

import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { CSSProperties, memo, ReactNode } from 'react';
import classes from './Skeleton.module.scss';

export enum SkeletonTheme {
  ELEMENTS = 'skeleton_element',
  BLOCKS = 'skeleton_block',
}

interface SkeletonProps {
  className?: string;
  theme?: SkeletonTheme;
  height?: string | number;
  width?: string | number;
  border?: string | number;
  block?: boolean;
  children?: ReactNode;
}

export const Skeleton = memo((props: SkeletonProps) => {
  const {
    className,
    theme = SkeletonTheme.ELEMENTS,
    height,
    width,
    border,
    block,
    children,
  } = props;

  const styles: CSSProperties = {
    height,
    width,
    borderRadius: border,
  };

  const mods: Mods = {
    [classes[theme]]: true,
  };

  if (block) {
    return (
        <div
            className={classNames(classes.skeleton, mods, [className])}
            style={styles}
        >
            {children}
        </div>
    );
  }

  return (
      <div
          className={classNames(classes.skeleton, mods, [className])}
          style={styles}
      />
  );
});
