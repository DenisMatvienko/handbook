/**
 *    ArticleDetails.
 *      - Get article from backend, check on loading and errors, add reducers;
 *      - ArticleDetails isolate all inside component. Get just "id" props, from fetch;
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
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { FullPageBlock } from 'shared/ui/Block/FullPageBlock/FullPageBlock';
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

  useInitialEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
        <SkeletonArticleDetails />
    );
  } else if (error) {
    content = (
        <FullPageBlock
            className={classes.articleDetails__error}
        >
            <ErrorPalette
                theme={ErrorPaletteTheme.TRANSPARENT}
                title={t('ArticleErrorTitle')}
                text={t('ArticleErrorText')}
                size={ErrorPaletteSize.XXL}
                refresh
            />
        </FullPageBlock>
    );
  } else {
    content = (
        <ArticleDetailsContent />
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
