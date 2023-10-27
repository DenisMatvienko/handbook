/**
 *    ArticleRecommendations-component.
 *      - Temporarily stub as recommendations - that, temporarily, isn't correct component using as stub.
 *        While recommendations entity block is not added.
 *        Render titles of article in separately of content block.
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo, useEffect } from 'react';
import { RecommendationsBlock } from 'shared/ui/Block/RecommendationsBlock/RecommendationsBlock';
import { useSelector } from 'react-redux';
import {
  getArticleDetails,
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
import { DoubleAdjustableFrame } from 'shared/ui/Block/DoubleAdjustableFrame/DoubleAdjustableFrame';
import {
  ArticleDetailsContent,
} from 'entities/Article/ui/ArticleDetailsContent/ArticleDetailsContent';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import {
  Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { FullPageBlock } from 'shared/ui/Block/FullPageBlock/FullPageBlock';
import {
  SkeletonArticleRecommendations,
} from 'shared/ui/Skeleton/SkeletonArticleRecommendations/SkeletonArticleRecommendations';
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
  const data = useSelector(getArticleDetails);
  const isLoading = useSelector(getArticleIsLoading);
  const error = useSelector(getArticleError);

  let content;

  if (isLoading) {
    content = (
        <SkeletonArticleRecommendations />
    );
  } else if (error) {
    content = (
        <SkeletonArticleRecommendations />
    );
  } else {
    content = (
        <div className={classes.ArticleRecommendations}>
            <RecommendationsBlock className={classes.ArticlesList}>
                <Text
                    className={classes.articleBlockTopTitle}
                    theme={TextTheme.BLOCK_TEXT}
                    text={t(data?.title ? data?.title : '-')}
                    align={TextAlign.LEFT}
                    size={TextSize.M}
                />
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
