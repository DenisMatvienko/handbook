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
import { Comment } from '../../model/types/comment';
import classes from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
    comments?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const {
    className,
    comments,
    isLoading,
  } = props;

  return (
      <div className={classNames(classes.CommentCard, {}, [className])}>
          <div className={classes.commentHeader}>
              <div className={classes.commentIcon}>
                  <div className={classes.innerIcon} />
              </div>
              <Avatar
                  size={AvatarSize.M}
                  radius={AvatarRadius.ELLIPSE}
                  src=""
                  alt=""
              />
              <Text
                  className={classes.commentTitle}
                  theme={TextTheme.BLOCK_TEXT}
                  title={comments?.user.username}
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
                  text={comments?.text}
                  size={TextSize.M}
                  align={TextAlign.LEFT}
              />
          </div>
      </div>
  );
});
