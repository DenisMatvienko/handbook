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
import {
  getArticleCommentsHasMore, getArticleCommentsIsLoading,
  getArticleCommentsPage,
} from 'pages/ArticleDetailsPage/model/selectors/comments/GetComments';
import { uid } from 'shared/lib/uid/uid';
import { getArticleComments } from 'pages/ArticleDetailsPage/model/slice/ArticleDetailsCommentsSlice';
import { CommentCard } from '../../ui/CommentCard/CommentCard';
import { Comment } from '../../model/types/comment';
import classes from './CommentList.module.scss';

interface CommentListProps {
  className?: string;
  marginTop?: boolean;
  articleId?: string;
}

const getCommentSkeletons = (count: number) => new Array(count || 5)
  .fill(0).map((_, index) => (
      <div>
          <SkeletonComment
              key={uid()}
          />
      </div>
  ));

export const CommentList = memo((props: CommentListProps) => {
  const {
    className,
    marginTop = false,
    articleId,
  } = props;
  const { t } = useTranslation('comments');
  const dispatch = useAppDispatch();
  const hasMoreComments = useSelector(getArticleCommentsHasMore);
  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleCommentsIsLoading);

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
                  title={`${t('comments')}`}
                  align={TextAlign.LEFT}
                  size={TextSize.S}
              />
              {comments?.length > 0
                ? comments.map(renderComment)
                : null}
              { isLoading && getCommentSkeletons(comments?.length) }
              {hasMoreComments && comments?.length
                ? (
                    <Button
                        onClick={onLoadNextPage}
                        theme={ButtonTheme.BACKGROUND_BLOCK}
                        radius={ButtonRadius.SEMI_ELLIPSE}
                    >
                        next page
                    </Button>
                )
                : null}
          </div>
      </FullPageBlock>
  );
});
