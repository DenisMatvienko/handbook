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
import { ArticleSortSelector } from 'features/ArticleSortSelector';
import { SortOrderType } from 'shared/types/sortOrder/sortOrderType';
import { ArticleSortField } from 'entities/Article/model/types/article';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticleList/fetchArticlesList';
import { articlePageSliceActions } from '../../model/slices/articlePageSlice';
import {
  getArticlePageOrder,
  getArticlePageSort,
  getArticlePageView,
} from '../../model/selectors/articlesPageSelectors';
import classes from './ArticlePageFilters.module.scss';

interface ArticlePageFiltersProps {
    className?: string;
}

export const ArticlePageFilters = memo((props: ArticlePageFiltersProps) => {
  const { className } = props;
  const { t } = useTranslation('filters');
  const dispatch = useAppDispatch();
  const views = useSelector(getArticlePageView);
  const sort = useSelector(getArticlePageSort);
  const order = useSelector(getArticlePageOrder);

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlePageSliceActions.setView(view));
  }, [dispatch]);

  const onChangeOrder = useCallback((newOrder: SortOrderType) => {
    dispatch(articlePageSliceActions.setOrder(newOrder));
    dispatch(articlePageSliceActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  const onChangeSort = useCallback((newSort: ArticleSortField) => {
    dispatch(articlePageSliceActions.setSort(newSort));
    dispatch(articlePageSliceActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  return (
      <FullPageBlock className={classNames(classes.articlePageFilters, {}, [className])}>
          <div className={classes.articlePageFilters__widgets}>
              <ArticleSortSelector
                  className={classes.articlePageFilters__selectors}
                  order={order}
                  sort={sort}
                  onChangeOrder={onChangeOrder}
                  onChangeSort={onChangeSort}
              />
          </div>
          <ArticleViewSelector view={views} onViewClick={onChangeView} />
      </FullPageBlock>
  );
});
