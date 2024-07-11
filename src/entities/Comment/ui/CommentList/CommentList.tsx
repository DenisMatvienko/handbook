/**
 *    CommentList-component;
 *      - List with comment-cards, which contain text with comments.
 */

import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, { memo, useCallback } from 'react';
import {
  Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { FullPageBlock } from 'shared/ui/Block/FullPageBlock/FullPageBlock';
import { SkeletonComment } from 'shared/ui/Skeleton/SkeletonComment/SkeletonComment';
import { fetchNextCommentPage } from 'pages/ArticleDetailsPage/model/service/fetchNextCommentPage/fetchNextCommentPage';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonRadius, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getArticleCommentsHasMore } from 'pages/ArticleDetailsPage/model/selectors/comments/GetComments';
import { uid } from 'shared/lib/uid/uid';
import { CommentCard } from '../../ui/CommentCard/CommentCard';
import { Comment } from '../../model/types/comment';
import classes from './CommentList.module.scss';

interface CommentListProps {
  className?: string;
  marginTop?: boolean;
  comments: Comment[];
  articleId?: string;
  isLoading?: boolean;
}

const getCommentSkeletons = () => new Array(5)
  .fill(0).map(() => (
      <SkeletonComment
          key={uid()}
      />
  ));

export const CommentList = memo((props: CommentListProps) => {
  const {
    className,
    marginTop = false,
    comments,
    isLoading,
    articleId,
  } = props;
  const { t } = useTranslation('comments');
  const dispatch = useAppDispatch();
  const hasMoreComments = useSelector(getArticleCommentsHasMore);

  const renderComment = (comment: Comment) => (
      <CommentCard
          isLoading={isLoading}
          comment={comment}
          key={comment.id}
      />
  );

  const onLoadNextPage = useCallback(() => {
    if (articleId) {
      dispatch(fetchNextCommentPage(articleId));
    }
  }, [articleId, dispatch]);

  const onClick = useCallback((e: React.MouseEvent<Element, MouseEvent>) => {
    e.preventDefault();
    onLoadNextPage();
  }, [onLoadNextPage]);

  const mods: Mods = {
    [classes.marginTop]: marginTop,
  };

  if (!isLoading && !comments.length) {
    return (
        <FullPageBlock className={classNames(classes.pageWrap, mods)}>
            <div className={classNames(classes.CommentsSection)}>
                <Text
                    theme={TextTheme.SUBTITLE}
                    text={t('no comments')}
                    align={TextAlign.CENTER}
                    size={TextSize.L}
                />
            </div>
        </FullPageBlock>
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
              {comments.length > 0 && comments.map(renderComment)}
              { isLoading && getCommentSkeletons() }
              {hasMoreComments && comments?.length
                  && (
                  <Button
                      onClick={onClick}
                      theme={ButtonTheme.BACKGROUND_BLOCK}
                      radius={ButtonRadius.SEMI_ELLIPSE}
                  >
                      next page
                  </Button>
                  )}
          </div>
      </FullPageBlock>
  );
});
