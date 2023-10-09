/**
 *    CommentList-component.
 *      - CommentList
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import classes from './CommentList.module.scss';

interface CommentListProps {
  className?: string;
}

export const CommentList = memo((props: CommentListProps) => {
  const { className } = props;

  return (
      <div className={classNames(classes.CommentList, {}, [className])}>
          <div>
              Text template
          </div>
      </div>
  );
});
