/**
 *    SkeletonComment-component.
 *      - SkeletonComment
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { Avatar, AvatarRadius, AvatarSize } from 'shared/ui/Avatar/Avatar';
import {
  Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { Skeleton, SkeletonTheme } from 'shared/ui/Skeleton/SkeletonDefault/Skeleton';
import classes from './SkeletonComment.module.scss';

interface SkeletonCommentProps {
    className?: string;
}

export const SkeletonComment = memo((props: SkeletonCommentProps) => {
  const { className } = props;

  return (
      <div className={classNames(classes.skeletonComment, {}, [className])}>
          <div className={classes.skeletonComment__header}>
              <div className={classes.skeletonComment__iconWrapper}>
                  <div className={classes.skeletonComment__icon} />
              </div>
              <Skeleton
                  border="50%"
                  width={50}
                  height={50}
              />
              <Skeleton
                  className={classes.skeletonComment__title}
                  border={5}
                  width={150}
                  height={10}
              />
              <Skeleton
                  border={5}
                  width={50}
                  height={10}
              />
          </div>
          <div className={classes.skeletonComment__text}>
              <Skeleton
                  border={5}
                  width="60%"
                  height={20}
              />
          </div>
      </div>
  );
});
