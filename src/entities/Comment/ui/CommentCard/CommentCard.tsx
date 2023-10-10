/**
 *    CommentCard-component.
 *      - CommentCard
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
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
              comment
          </div>
      </div>
  );
});
