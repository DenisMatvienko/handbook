/**
 *    ArticleDetailRecommendations-component.
 *      - ArticleDetailRecommendations
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import {
  articlesPageRecommendationsReducer,
} from 'features/ArticlesPageRecommendations/model/slices/articlesPageRecommendationsSlice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { uid } from 'shared/lib/uid/uid';
import { FullPageBlock } from 'shared/ui/Block/FullPageBlock/FullPageBlock';
import {
  articleDetailRecommendationsReducer,
  getArticleDetailRecommendations,
} from 'features/ArticleDetailRecommendations/model/slices/articleDetailRecommendationsSlice';
import {
  getArticleDetailRecommendationsErrorSelector,
  getArticleDetailRecommendationsIsLoadingSelector,
} from 'features/ArticleDetailRecommendations/model/selectors/getArticleDetailRecommendations';
import {
  initArticleDetailRecommendations,
} from 'features/ArticleDetailRecommendations/model/services/initArticleDetailRecommendations';
import classes from './ArticleDetailRecommendations.module.scss';

interface ArticleDetailRecommendationsProps {
    className?: string;
}

const initialReducers: ReducersList = {
  articleDetailRecommendations: articleDetailRecommendationsReducer,
};

export const ArticleDetailRecommendations = memo((props: ArticleDetailRecommendationsProps) => {
  const { className } = props;
  const { t } = useTranslation('recommendations');
  const recommendations = useSelector(getArticleDetailRecommendations.selectAll);
  const isLoading = useSelector(getArticleDetailRecommendationsIsLoadingSelector);
  const error = useSelector(getArticleDetailRecommendationsErrorSelector);
  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    dispatch(initArticleDetailRecommendations());
  });

  return (
      <DynamicModuleLoader
          reducers={initialReducers}
      >
          <FullPageBlock
              className={classNames(classes.ArticleDetailRecommendations, {}, [className])}
              key={uid()}
          >
              <div>
                  {recommendations.map((item) => (
                      <div
                          key={item.id}
                      >
                          {item.article.title}
                      </div>
                  ))}
              </div>
          </FullPageBlock>
      </DynamicModuleLoader>
  );
});
