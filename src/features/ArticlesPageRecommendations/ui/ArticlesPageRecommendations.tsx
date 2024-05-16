/**
 *    ArticlesPageRecommendations-component.
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { uid } from 'shared/lib/uid/uid';
import {
  Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { FullPageBlock } from 'shared/ui/Block/FullPageBlock/FullPageBlock';
import {
  fetchArticlePageRecommendations,
} from 'features/ArticlesPageRecommendations/model/services/fetchArticlePageRecommendations';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { navbarSearchReducer } from 'features/NavbarSearch/model/slices/navbarSearchSlice';
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
    dispatch(fetchArticlePageRecommendations({ replace: true }));
  });

  console.log(recommendations);

  return (
      <DynamicModuleLoader
          reducers={initialReducers}
          removeAfterUnmount
      >
          <FullPageBlock
              className={classNames(classes.ArticlesPageRecommendations, {}, [className])}
              key={uid()}
          >
              <div>
                  {
                      recommendations?.map((item) => (
                          <Text
                              className={classes.recommendationsMock}
                              key={uid()}
                              theme={TextTheme.BLOCK_TEXT}
                              text={item.createdAt}
                              size={TextSize.M}
                              align={TextAlign.LEFT}
                          />
                      ))
                  }
              </div>
          </FullPageBlock>
      </DynamicModuleLoader>
  );
});
