/**
 *    ArticleRecommendations-component.
 *      - Render titles of article in separately of content block
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo, useEffect } from 'react';
import { RecommendationsBlock } from 'shared/ui/Block/RecommendationsBlock/RecommendationsBlock';
import { useSelector } from 'react-redux';
import {
  getArticleError,
  getArticleIsLoading,
} from 'entities/Article/model/selectors/getArticleDetails';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  fetchArticleById,
} from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import {
  SkeletonArticleDetails,
} from 'shared/ui/Skeleton/SkeletonArticleDetails/SkeletonArticleDetails';
import {
  ErrorPalette,
  ErrorPaletteSize,
  ErrorPaletteTheme,
} from 'shared/ui/ErrorPalette/ErrorPalette';
import { DoubleAdjustableBlock } from 'shared/ui/Block/DoubleAdjustableBlock/DoubleAdjustableBlock';
import {
  ArticleDetailsContent,
} from 'entities/Article/ui/ArticleDetailsContent/ArticleDetailsContent';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import classes from './ArticleRecommendations.module.scss';

interface ArticleRecommendationsProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleRecommendations = memo((props: ArticleRecommendationsProps) => {
  const { className, id } = props;
  const { t } = useTranslation();
  const isLoading = useSelector(getArticleIsLoading);
  const error = useSelector(getArticleError);

  let content;

  if (isLoading) {
    content = (
        <p>loading..</p>
    );
  } else if (error) {
    content = (
        <ErrorPalette
            className={classes.articleError}
            theme={ErrorPaletteTheme.DEFAULT}
            title={t('ArticleErrorTitle')}
            text={t('ArticleErrorText')}
            size={ErrorPaletteSize.XXL}
            refresh
        />
    );
  } else {
    content = (
        <div className={classes.ArticleRecommendations}>
            <RecommendationsBlock>
                Text template 1
            </RecommendationsBlock>
            <RecommendationsBlock>
                hello
            </RecommendationsBlock>
            <RecommendationsBlock>
                Text template 3
            </RecommendationsBlock>
        </div>
    );
  }

  return (
      <DynamicModuleLoader
          reducers={reducers}
          removeAfterUnmount
      >
          {content}
      </DynamicModuleLoader>
  );
});
