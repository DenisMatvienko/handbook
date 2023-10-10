/**
 *    CommentCard-component.
 *      - CommentCard
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
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
          <div>
              hello
          </div>
      </div>
  );
});
