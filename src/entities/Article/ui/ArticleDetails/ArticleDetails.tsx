/**
 *    ArticleDetails.
 *      - Get article from backend, check on loading and errors, add reducers
 */

import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import React, { memo, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
  ErrorPalette,
  ErrorPaletteSize,
  ErrorPaletteTheme,
} from 'shared/ui/ErrorPalette/ErrorPalette';
import {
  SkeletonArticleDetails,
} from 'shared/ui/Skeleton/SkeletonArticleDetails/SkeletonArticleDetails';
import {
  ArticleDetailsContent,
} from 'entities/Article/ui/ArticleDetailsContent/ArticleDetailsContent';
import { getArticleError, getArticleIsLoading } from '../../model/selectors/getArticleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import classes from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const {
    className,
    id,
  } = props;
  const { t } = useTranslation('articles');
  const isLoading = useSelector(getArticleIsLoading);
  const error = useSelector(getArticleError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
        <SkeletonArticleDetails />
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
        <ArticleDetailsContent id={id} />
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
