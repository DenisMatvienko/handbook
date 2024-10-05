/**
 *    CommentCard-component.
 *      - CommentCard
 */

import { memo } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Avatar, AvatarRadius, AvatarSize } from 'shared/ui/Avatar/Avatar';
import {
  Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { Comment } from '../../model/types/comment';
import classes from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment: Comment;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const {
    className,
    comment,
  } = props;

  if (!comment) {
    return null;
  }

  return (
      <div className={classNames(classes.commentCard, {}, [className])}>
          <div className={classes.commentCard__header}>
              <div className={classes.commentCard__icon}>
                  <div className={classes.commentCard__innerIcon} />
              </div>
              <AppLink
                  className={classes.commentCard__link}
                  to={`${RoutePath.profile}${comment?.user.id}`}
              >
                  {comment
                    ? (
                        <Avatar
                            size={AvatarSize.M}
                            radius={AvatarRadius.ELLIPSE}
                            src={comment?.user.avatar}
                            alt={comment?.user.username}
                        />
                    )
                    : null}
                  <Text
                      className={classes.commentCard__title}
                      theme={TextTheme.BLOCK_TEXT}
                      title={comment?.user.username}
                      size={TextSize.S}
                  />
              </AppLink>
              <Text
                  theme={TextTheme.SUBTITLE}
                  text="11.10.2023"
                  size={TextSize.S}
                  align={TextAlign.LEFT}
              />
          </div>
          <div className={classes.commentCard__text}>
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
