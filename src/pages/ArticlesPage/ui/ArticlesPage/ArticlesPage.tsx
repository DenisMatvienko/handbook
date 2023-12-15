/**
 *    ArticlesPage-component.
 *      - Load articles on page. Have view options;
 *
 *      @param useInitialEffect;
 *          View initView got by set view with SetView
 *          - First render, on page = 1.
 *
 *      @param onLoadNextPart;
 *          - Next render, when scroll move to 'triggerRef' in 'Page' component. Trigger new
 *          articles by inited limits,
 *          while 'hasMore' property in state - true.
 *
 *      @param inited;
 *          - If data's not inited: inited and load data from server;
 *          - Otherwise, there is no need to do this, because the data has already been loaded and inited
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import {
  ComponentsObjectType,
  DoubleAdjustableFrame,
} from 'shared/ui/Block/DoubleAdjustableFrame/DoubleAdjustableFrame';
import { FullPageBlock } from 'shared/ui/Block/FullPageBlock/FullPageBlock';
import {
  Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticleList/fetchArticlesList';
import { useSelector } from 'react-redux';
import {
  getArticlePageError, getArticlePageInited,
  getArticlePageView,
  getArticlesPageIsLoading,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { uid } from 'shared/lib/uid/uid';
import { ArticleView, ArticleViewSelector } from 'entities/Article';
import { Page } from 'shared/ui/Page/Page';
import { fetchNextArticlePage } from 'pages/ArticlesPage/model/services/fetchNextArticlePage/fetchNextArticlePage';
import {
  ErrorPalette,
  ErrorPaletteSize,
  ErrorPaletteTheme,
} from 'shared/ui/ErrorPalette/ErrorPalette';
import { initArticlesPage } from 'pages/ArticlesPage/model/services/initArticlePage/initArticlesPage';
import { articlePageSliceActions, articlePageSliceReducer, getArticles } from '../../model/slices/articlePageSlice';
import classes from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlePageSliceReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const { t } = useTranslation('articles');
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const views = useSelector(getArticlePageView);
  const error = useSelector(getArticlePageError);

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlePage());
  }, [dispatch]);

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlePageSliceActions.setView(view));
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(initArticlesPage());
  });

  const blockMock = useCallback((text: string, indent?: string) => (
      <FullPageBlock
          className={indent}
          key={uid()}
      >
          <Text
              className={classes.recommendationsMock}
              key={uid()}
              theme={TextTheme.BLOCK_TEXT}
              text={text}
              size={TextSize.M}
              align={TextAlign.LEFT}
          />
      </FullPageBlock>
  ), []);

  const componentsLeftSide: ComponentsObjectType = {
    articleList: <ArticleList
        view={views}
        isLoading={isLoading}
        articles={articles}
    />,
  };

  const componentsRightSide: ComponentsObjectType = {
    recommendations: blockMock('=Temporary recommendations layout='),
    histories: blockMock('=Temporary histories layout=', classes.recommendationsMockWrapper),
  };

  if (error) {
    return (
        <Page>
            <ErrorPalette
                className={classes.articleError}
                theme={ErrorPaletteTheme.DEFAULT}
                title={t('ArticlePageErrorTitle')}
                text={t('ArticlePageErrorText')}
                size={ErrorPaletteSize.XXL}
                refresh
            />
        </Page>
    );
  }

  return (
      <Page
          onScrollEnd={onLoadNextPart}
      >
          <DynamicModuleLoader
              reducers={reducers}
              removeAfterUnmount={false}
          >
              <div className={classNames(classes.ArticlesPage, {}, [className])}>
                  <FullPageBlock
                      className={classes.ArticlesPageHeader}
                  >
                      <ArticleViewSelector view={views} onViewClick={onChangeView} />
                  </FullPageBlock>
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

export default memo(ArticlesPage);
