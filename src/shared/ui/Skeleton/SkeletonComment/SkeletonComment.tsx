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
      <div className={classNames(classes.SkeletonComment, {}, [className])}>
          <div className={classes.commentHeader}>
              <div className={classes.commentIcon}>
                  <div className={classes.innerIcon} />
              </div>
              <Skeleton
                  border="50%"
                  width={50}
                  height={50}
              />
              <Skeleton
                  className={classes.commentTitle}
                  border={5}
                  width={200}
                  height={20}
              />
              <Skeleton
                  border={5}
                  width={100}
                  height={20}
              />
          </div>
          <div className={classes.commentText}>
              <Skeleton
                  border={5}
                  width="95%"
                  height={200}
              />
          </div>
      </div>
  );
});
