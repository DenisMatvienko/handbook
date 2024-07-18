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
 *
 *      @param Tabs;
 *          - use horizontal mouse wheel;
 *          https://ru.stackoverflow.com/questions/1382566/react-horizontal-scroll-to-section-mouse-wheel
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
import { useSelector } from 'react-redux';
import { uid } from 'shared/lib/uid/uid';
import { Page } from 'widgets/Page/Page';
import { ErrorPalette, ErrorPaletteSize, ErrorPaletteTheme } from 'shared/ui/ErrorPalette/ErrorPalette';
import { ArticleSortSelector } from 'features/ArticleSortSelector';
import { SortOrderType } from 'shared/types/sortOrder/sortOrderType';
import { ArticleSortField, ArticleType } from 'entities/Article/model/types/article';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticleList/fetchArticlesList';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { ArticleTypeTabs } from 'entities/Article/ui/ArticleTypeTabs/ArticleTypeTabs';
import {
  articlesPageRecommendationsReducer,
} from 'features/ArticlesPageRecommendations/model/slices/articlesPageRecommendationsSlice';
import { ArticlesPageRecommendations } from 'features/ArticlesPageRecommendations/ui/ArticlesPageRecommendations/ArticlesPageRecommendations';
import { ArticlePageHeader } from '../ArticlePageFilters/ArticlePageHeader';
import { initArticlesPage } from '../../model/services/initArticlePage/initArticlesPage';
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlePage/fetchNextArticlePage';
import {
  getArticlePageError,
  getArticlePageOrder,
  getArticlePageSort,
  getArticlePageTabs,
  getArticlePageView,
  getArticlesPageIsLoading,
} from '../../model/selectors/articlesPageSelectors';
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
  const views = useSelector(getArticlePageView);
  const error = useSelector(getArticlePageError);
  const sort = useSelector(getArticlePageSort);
  const order = useSelector(getArticlePageOrder);
  const type = useSelector(getArticlePageTabs);

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlePage());
  }, [dispatch]);

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);

  const debounceFetchData = useDebounce(fetchData, 500);

  useInitialEffect(() => {
    dispatch(initArticlesPage());
  });

  const onChangeOrder = useCallback((newOrder: SortOrderType) => {
    dispatch(articlePageSliceActions.setOrder(newOrder));
    dispatch(articlePageSliceActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  const onChangeSort = useCallback((newSort: ArticleSortField) => {
    dispatch(articlePageSliceActions.setSort(newSort));
    dispatch(articlePageSliceActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  const onChangeType = useCallback((value: ArticleType) => {
    dispatch(articlePageSliceActions.setType(value));
    dispatch(articlePageSliceActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  const widgetsLeftSide: ComponentsObjectType = {
    filters: <ArticleSortSelector
        className={classes.articlesPage__selectors}
        order={order}
        sort={sort}
        onChangeOrder={onChangeOrder}
        onChangeSort={onChangeSort}
    />,
  };

  const widgetsRightSide: ComponentsObjectType = {
    tags: <ArticleTypeTabs
        onChangeType={onChangeType}
        value={type}
    />,
  };

  const contentLeftSide: ComponentsObjectType = {
    articleList: <ArticleList
        view={views}
    />,
  };

  const contentRightSide: ComponentsObjectType = {
    recommendations: <ArticlesPageRecommendations />,
  };

  if (error) {
    return (
        <Page>
            <FullPageBlock
                className={classes.articlesPage__error}
            >
                <ErrorPalette
                    theme={ErrorPaletteTheme.TRANSPARENT}
                    title={t('ArticlePageErrorTitle')}
                    text={t('ArticlePageErrorText')}
                    size={ErrorPaletteSize.XXL}
                    refresh
                />
            </FullPageBlock>
        </Page>
    );
  }

  return (
      <DynamicModuleLoader
          reducers={reducers}
          removeAfterUnmount={false}
      >
          <Page
              onScrollEnd={onLoadNextPart}
          >
              <div className={classNames(classes.articlesPage, {}, [className])}>
                  <ArticlePageHeader />
                  <DoubleAdjustableFrame
                      className={classes.articlesPage__filters}
                      widthLeftBlock="69%"
                      widthRightBlock="30%"
                      leftBlock={widgetsLeftSide}
                      rightBlock={widgetsRightSide}
                  />
                  <DoubleAdjustableFrame
                      className={classes.articlesPage__content}
                      widthLeftBlock="69%"
                      widthRightBlock="30%"
                      leftBlock={contentLeftSide}
                      rightBlock={contentRightSide}
                  />
              </div>
          </Page>
      </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
