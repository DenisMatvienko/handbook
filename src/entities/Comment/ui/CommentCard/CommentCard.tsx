/**
 *    CommentCard-component.
 *      - CommentCard
 */

import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import { Avatar, AvatarRadius, AvatarSize } from 'shared/ui/Avatar/Avatar';
import {
  Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { SkeletonComment } from 'shared/ui/Skeleton/SkeletonComment/SkeletonComment';
import { Comment } from '../../model/types/comment';
import classes from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const {
    className,
    comment,
    isLoading,
  } = props;

  if (isLoading) {
    return (
        <SkeletonComment />
    );
  }

  return (
      <div className={classNames(classes.CommentCard, {}, [className])}>
          <div className={classes.commentHeader}>
              <div className={classes.commentIcon}>
                  <div className={classes.innerIcon} />
              </div>
              {comment
                ? (
                    <Avatar
                        size={AvatarSize.M}
                        radius={AvatarRadius.CIRCLE}
                        src={comment?.user.avatar}
                        alt={comment?.user.username}
                    />
                )
                : null}
              <Text
                  className={classes.commentTitle}
                  theme={TextTheme.BLOCK_TEXT}
                  title={comment?.user.username}
                  size={TextSize.S}
              />
              <Text
                  theme={TextTheme.SUBTITLE}
                  text="11.10.2023"
                  size={TextSize.S}
                  align={TextAlign.LEFT}
              />
          </div>
          <div className={classes.commentText}>
              <Text
                  theme={TextTheme.BLOCK_TEXT}
                  text={comment?.text}
                  size={TextSize.M}
                  align={TextAlign.LEFT}
              />
          </div>
      </div>
  );
});
