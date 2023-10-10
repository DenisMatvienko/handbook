/**
 *    CommentCard-component.
 *      - CommentCard
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import classes from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className } = props;

  return (
      <div className={classNames(classes.CommentCard, {}, [className])}>
          <div>
              Comment list
          </div>
      </div>
  );
});
