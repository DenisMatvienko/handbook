/**
 *    ArticlePageFilters.
 *      Search, filter, order in article page;
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { ArticleView, ArticleViewSelector } from 'entities/Article';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { FullPageBlock } from 'shared/ui/Block/FullPageBlock/FullPageBlock';
import { Select } from 'shared/ui/Select/Select';
import { Input } from 'shared/ui/Input/Input';
import { articlePageSliceActions } from '../model/slices/articlePageSlice';
import { getArticlePageView } from '../model/selectors/articlesPageSelectors';
import classes from './ArticlePageFilters.module.scss';

interface ArticlePageFiltersProps {
    className?: string;
}

export const ArticlePageFilters = memo((props: ArticlePageFiltersProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const views = useSelector(getArticlePageView);

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlePageSliceActions.setView(view));
  }, [dispatch]);

  return (
      <FullPageBlock className={classNames(classes.articlePageFilters, {}, [className])}>
          <div className={classes.articlePageFilters__widgets}>
              <Select />
              <Input placeholder={t('Search')} />
          </div>
          <ArticleViewSelector view={views} onViewClick={onChangeView} />
      </FullPageBlock>
  );
});
