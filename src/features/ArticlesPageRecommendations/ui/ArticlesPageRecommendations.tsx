/**
 *    ArticlesPageRecommendations-component.
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import {
  getArticlesPageRecommendationsErrorSelector,
  getArticlesPageRecommendationsIsLoadingSelector,
} from '../model/selectors/getArticlesPageRecommendations';
import {
  getArticleRecommendations,
} from '../model/slices/articlesPageRecommendationsSlice';
import classes from './ArticlesPageRecommendations.module.scss';

interface ArticlesPageRecommendationsProps {
    className?: string;
}

export const ArticlesPageRecommendations = memo((props: ArticlesPageRecommendationsProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const isLoading = useSelector(getArticlesPageRecommendationsIsLoadingSelector);
  const error = useSelector(getArticlesPageRecommendationsErrorSelector);

  return (
      <div className={classNames(classes.ArticlesPageRecommendations, {}, [className])}>
          <div>
              Text template
          </div>
      </div>
  );
});
