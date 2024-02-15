/**
 *    CommentList-component;
 *      - List with comment-cards, which contain text with comments.
 */

import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import {
  Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { FullPageBlock } from 'shared/ui/Block/FullPageBlock/FullPageBlock';
import { SkeletonComment } from 'shared/ui/Skeleton/SkeletonComment/SkeletonComment';
import { Skeleton, SkeletonTheme } from 'shared/ui/Skeleton/SkeletonDefault/Skeleton';
import { CommentCard } from '../../ui/CommentCard/CommentCard';
import { Comment } from '../../model/types/comment';
import classes from './CommentList.module.scss';

interface CommentListProps {
  className?: string;
  marginTop?: boolean;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
  const {
    className,
    marginTop = false,
    comments,
    isLoading,
  } = props;
  const { t } = useTranslation('comments');

  const mods: Mods = {
    [classes.marginTop]: marginTop,
  };

  if (isLoading) {
    return (
        <Skeleton
            className={classes.commentListSkeleton}
            width="100%"
            height="auto"
            border={5}
            theme={SkeletonTheme.BLOCKS}
            block
        >
            <SkeletonComment />
            <SkeletonComment />
            <SkeletonComment />
        </Skeleton>
    );
  }

  return (
      <FullPageBlock className={classNames(classes.pageWrap, mods)}>
          <div className={classNames(classes.CommentsSection)}>
              <Text
                  className={classes.title}
                  theme={TextTheme.BLOCK_TEXT}
                  title={comments ? `${t('comments')}(${comments?.length})` : `${t('comments')}(0)`}
                  align={TextAlign.LEFT}
                  size={TextSize.S}
              />
              {comments?.length
                ? comments.map((item) => (
                    <CommentCard
                        isLoading={isLoading}
                        comment={item}
                        key={item.id}
                    />
                ))
                : (
                    <Text
                        theme={TextTheme.SUBTITLE}
                        text={t('no comments')}
                        align={TextAlign.CENTER}
                        size={TextSize.L}
                    />
                )}
          </div>
      </FullPageBlock>
  );
});
