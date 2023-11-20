/**
 *    ArticlesPage-component.
 *      - ArticlesPage
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo, useMemo } from 'react';
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
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList';
import { useSelector } from 'react-redux';
import {
  getArticlePageError,
  getArticlesPageIsLoading,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { uid } from 'shared/lib/uid/uid';
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
  const error = useSelector(getArticlePageError);
  const views = useSelector(getArticlePageError);

  useInitialEffect(() => {
    dispatch(fetchArticlesList());
  });

  const componentsLeftSide: ComponentsObjectType = {
    articleList: <ArticleList
        isLoading={isLoading}
        articles={articles}
    />,
  };

  const componentsRightSide: ComponentsObjectType = {
    recommendations: <FullPageBlock key={uid()}>
        <Text
            className={classes.recommendationsMock}
            key={uid()}
            theme={TextTheme.BLOCK_TEXT}
            text="=Temporary recommendations layout="
            size={TextSize.M}
            align={TextAlign.LEFT}
        />
    </FullPageBlock>,
    Histories: <FullPageBlock
        className={classes.recommendationsMockWrapper}
        key={uid()}
    >
        <Text
            className={classes.recommendationsMock}
            key={uid()}
            theme={TextTheme.BLOCK_TEXT}
            text="=Temporary histories layout="
            size={TextSize.M}
            align={TextAlign.LEFT}
        />
    </FullPageBlock>,
  };

  return (
      <DynamicModuleLoader
          reducers={reducers}
          removeAfterUnmount
      >
          <div className={classNames(classes.ArticlesPage, {}, [className])}>
              <FullPageBlock
                  className={classes.ArticlesPageHeader}
              >
                  <Text
                      theme={TextTheme.BLOCK_TEXT}
                      title={t('ArticleList')}
                      size={TextSize.L}
                      align={TextAlign.LEFT}
                  />
              </FullPageBlock>
              <DoubleAdjustableFrame
                  widthLeftBlock="69%"
                  widthRightBlock="30%"
                  leftBlock={componentsLeftSide}
                  rightBlock={componentsRightSide}
              />
          </div>
      </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
