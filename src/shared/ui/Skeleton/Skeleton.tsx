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
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, memo } from 'react';
import classes from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

export const Skeleton = memo((props: SkeletonProps) => {
  const {
    className,
    height,
    width,
    border,
  } = props;

  const styles: CSSProperties = {
    height,
    width,
    borderRadius: border,
  };

  return (
      <div className={classNames(classes.Skeleton, {}, [className])}>
          <div style={styles} />
      </div>
  );
});
