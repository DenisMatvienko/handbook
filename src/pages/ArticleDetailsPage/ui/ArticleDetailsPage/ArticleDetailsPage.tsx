/**
 *    ArticleDetailsPage-component.
 *      - ArticleDetailsPage
 *
 *    @param DoubleAdjustableFrame;
 *      - Wrap 2 blocks bt left side and by right side of page. Allow to add width for both blocks.
 *
 *    @param componentsLeftSide;
 *      - Object with components which participate in left side of DoubleAdjustableFrame
 *
 *    @param componentRightSide;
 *      - Object with components which participate in right side of DoubleAdjustableFrame
 *
 *    @param ArticleDetails;
 *      - Main article content, should to take most of the place. By default, width - 69%.
 */

import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { AddCommentForm } from 'features/comments/AddCommentForm';
import { ArticlesPageRecommendations } from 'features/recommendations/ArticlesPageRecommendations';

import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowLeftIcon from 'shared/assets/icons/left-arrow-alt.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import {
  ComponentsObjectType,
  DoubleAdjustableFrame,
} from 'shared/ui/Block/DoubleAdjustableFrame/DoubleAdjustableFrame';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Page } from 'widgets/Page/Page';
import { ArticleDetailRecommendations } from 'features/recommendations/ArticleDetailRecommendations';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments/GetComments';
import { addCommentForArticle } from '../../model/service/AddCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/service/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { articleDetailsCommentsActions, articleDetailsCommentsReducer, getArticleComments } from '../../model/slice/ArticleDetailsCommentsSlice';
import classes from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('articles');
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(articleDetailsCommentsActions.resetCommentPage());
    dispatch(fetchCommentsByArticleId(id || '0'));
  }, [id, dispatch]);

  const componentsLeftSide: ComponentsObjectType = {
    articleContent: <ArticleDetails id={id || '0'} />,
    articlesDetailRecommendations: <ArticleDetailRecommendations />,
    comments: <CommentList
        marginTop
        articleId={id || '0'}
    />,
    addCommentForm: <AddCommentForm
        onSendComment={onSendComment}
    />,
  };

  const componentsRightSide: ComponentsObjectType = {
    recommendations: <ArticlesPageRecommendations />,
  };

  if (!id) {
    return (
        <div className={classNames(classes.articleDetailsPage, {}, [className])}>
            <div>
                <Text
                    title={t('Oopps...')}
                    theme={TextTheme.BACKGROUND_TEXT}
                    align={TextAlign.LEFT}
                />
                <Text
                    theme={TextTheme.BACKGROUND_TEXT}
                    text={t('Article not found')}
                    align={TextAlign.LEFT}
                />
            </div>
        </div>
    );
  }

  return (
      <Page>
          <DynamicModuleLoader
              reducers={reducers}
              removeAfterUnmount
          >
              <div className={classNames(classes.articleDetailsPage, {}, [className])}>
                  <div className={classes.articleDetailsPage__wrapper}>
                      <Button
                          onClick={onBackToList}
                          className={classes.articleDetailsPage__backBtn}
                          theme={ButtonTheme.CANCEL}
                      >
                          <Icon
                              className={classes.articleDetailsPage__backIcon}
                              Svg={ArrowLeftIcon}
                          />
                      </Button>
                  </div>
                  <DoubleAdjustableFrame
                      widthLeftBlock="69%"
                      widthRightBlock="30%"
                      leftBlock={componentsLeftSide}
                      rightBlock={componentsRightSide}
                  />
              </div>
          </DynamicModuleLoader>
      </Page>
  );
};

export default memo(ArticleDetailsPage);
