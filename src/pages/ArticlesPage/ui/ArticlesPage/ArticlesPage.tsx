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
import { Tabs } from 'shared/ui/Tabs/Tabs';
import { ArticlePageFilters } from '../ArticlePageFilters/ArticlePageFilters';
import { initArticlesPage } from '../../model/services/initArticlePage/initArticlesPage';
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlePage/fetchNextArticlePage';
import {
  getArticlePageError,
  getArticlePageView,
  getArticlesPageIsLoading,
} from '../../model/selectors/articlesPageSelectors';
import { articlePageSliceReducer, getArticles } from '../../model/slices/articlePageSlice';
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
    histories: blockMock('=Temporary histories layout=', classes.recommendationsMock_wrapper),
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

  const tabsArray = new Array(50).fill(0).map((item, index) => ({
    value: `tab${index}`,
    content: `tab${index}`,
  }));

  const tagsArray = articles.map((item, index) => (
    [
      {
        value: item.type,
        content: item.type,
      },
    ]
  ));

  return (
      <DynamicModuleLoader
          reducers={reducers}
          removeAfterUnmount={false}
      >
          <Page
              onScrollEnd={onLoadNextPart}
          >
              <div className={classNames(classes.articlesPage, {}, [className])}>
                  <ArticlePageFilters />
                  <div className={classes.articlePageFilters__tabsWrapper}>
                      <Tabs
                          className={classes.articlePageFilters__tabs}
                          tabs={tabsArray}
                          value="tab2"
                          onTabClick={() => 'hello'}
                      />
                  </div>
                  <DoubleAdjustableFrame
                      className={classes.articlePageFilters__content}
                      widthLeftBlock="69%"
                      widthRightBlock="30%"
                      leftBlock={componentsLeftSide}
                      rightBlock={componentsRightSide}
                  />
              </div>
          </Page>
      </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
