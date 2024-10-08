/**
 *    CommentList-component;
 *      - List with comment-cards, which contain text with comments.
 */

import {
  getArticleCommentsHasMore, getArticleCommentsIsLoading,
} from 'pages/ArticleDetailsPage/model/selectors/comments/GetComments';
import { fetchNextCommentPage } from 'pages/ArticleDetailsPage/model/service/fetchNextCommentPage/fetchNextCommentPage';
import { getArticleComments } from 'pages/ArticleDetailsPage/model/slice/ArticleDetailsCommentsSlice';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { uid } from 'shared/lib/uid/uid';
import { FullPageBlock } from 'shared/ui/Block/FullPageBlock/FullPageBlock';
import { Button, ButtonRadius, ButtonTheme } from 'shared/ui/Button/Button';
import { SkeletonComment } from 'shared/ui/Skeleton/SkeletonComment/SkeletonComment';
import {
  Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../../ui/CommentCard/CommentCard';
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
                  title={t('comments')}
                  align={TextAlign.LEFT}
                  size={TextSize.S}
              />
              {comments?.length > 0
                ? comments.map(renderComment)
                : null}
              { isLoading && getCommentSkeletons(comments?.length) }
              { hasMoreComments && comments?.length
                ? (
                    <Button
                        onClick={onLoadNextPage}
                        theme={ButtonTheme.BACKGROUND_BLOCK}
                        radius={ButtonRadius.SEMI_ELLIPSE}
                    >
                        {t('nextPage')}
                    </Button>
                )
                : null}
          </div>
      </FullPageBlock>
  );
});
