/**
 *    CommentList-component.
 *      - CommentList
 */

import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import {
  Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { CommentCard } from 'entities/Comment/ui/CommentCard/CommentCard';
import classes from './CommentList.module.scss';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
  const {
    className,
    comments,
    isLoading,
  } = props;
  const { t } = useTranslation('comments');

  return (
      <div className={classes.CommentsSection}>
          <Text
              theme={TextTheme.SUBTITLE}
              title={comments ? `${t('comments')}[${comments?.length}]` : `${t('comments')}[0]`}
              align={TextAlign.LEFT}
              size={TextSize.M}
          />
          {comments?.length
            ? comments.map((item) => (
                <CommentCard />
            ))
            : (
                <Text
                    theme={TextTheme.TRANSLUCENT}
                    text={t('no comments')}
                    align={TextAlign.CENTER}
                    size={TextSize.XL}
                />
            )}
      </div>
  );
});
