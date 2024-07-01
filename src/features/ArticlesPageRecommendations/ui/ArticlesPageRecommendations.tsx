/**
 *    ArticlesPageRecommendations-component.
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { uid } from 'shared/lib/uid/uid';
import { FullPageBlock } from 'shared/ui/Block/FullPageBlock/FullPageBlock';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';

import {
  RecommendationsArticleListMain,
} from 'entities/Recommendation/ui/RecommendationsArticleListMain/RecommendationsArticleListMain';
import {
  initArticlePageRecommendations,
} from '../model/services/initArticlePageRecommendations';
import {
  getArticlesPageRecommendationsErrorSelector,
  getArticlesPageRecommendationsIsLoadingSelector,
} from '../model/selectors/getArticlesPageRecommendations';
import {
  articlesPageRecommendationsReducer,
  getArticleRecommendations,
} from '../model/slices/articlesPageRecommendationsSlice';
import classes from './ArticlesPageRecommendations.module.scss';

interface ArticlesPageRecommendationsProps {
    className?: string;
}

const initialReducers: ReducersList = {
  articlesPageRecommendations: articlesPageRecommendationsReducer,
};

export const ArticlesPageRecommendations = memo((props: ArticlesPageRecommendationsProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const isLoading = useSelector(getArticlesPageRecommendationsIsLoadingSelector);
  const error = useSelector(getArticlesPageRecommendationsErrorSelector);
  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    dispatch(initArticlePageRecommendations());
  });

  return (
      <DynamicModuleLoader
          reducers={initialReducers}
      >
          <FullPageBlock
              className={classNames(classes.ArticlesPageRecommendations, {}, [className])}
              key={uid()}
          >
              <div>
                  <RecommendationsArticleListMain
                      recommendations={recommendations}
                      isLoading={isLoading}
                      error={error}
                  />
              </div>
          </FullPageBlock>
      </DynamicModuleLoader>
  );
});
