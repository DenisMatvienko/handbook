/**
 *    ArticleTypeTabs-component.
 *      - ArticleTypeTabs
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { ArticleType } from 'entities/Article/model/types/article';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { stringCutter } from 'shared/lib/stringCutter/stringCutter';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticleList/fetchArticlesList';
import { articlePageSliceActions } from 'pages/ArticlesPage/model/slices/articlePageSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getArticlePageTabs } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import classes from './ArticleTypeTabs.module.scss';

interface ArticleTypeTabsProps {
    className?: string;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const {
    className,
  } = props;

  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const value = useSelector(getArticlePageTabs);

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);

  const onChangeType = useCallback((value: ArticleType) => {
    dispatch(articlePageSliceActions.setType(value));
    dispatch(articlePageSliceActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  const typeTabs = useMemo<TabItem[]>(() => [
    {
      value: `${ArticleType.ALL}`,
      content: `${stringCutter(ArticleType.ALL, 11)}`,
    },
    {
      value: `${ArticleType.ARCHITECTURE}`,
      content: `${stringCutter(ArticleType.ARCHITECTURE, 11)}`,
    },
    {
      value: `${ArticleType.IT}`,
      content: `${stringCutter(ArticleType.IT, 11)}`,
    },
    {
      value: `${ArticleType.JS}`,
      content: `${stringCutter(ArticleType.JS, 11)}`,
    },
    {
      value: `${ArticleType.GIT}`,
      content: `${stringCutter(ArticleType.GIT, 11)}`,
    },
    {
      value: `${ArticleType.DIFFICULT_PROGRAMMING}`,
      content: `${stringCutter(ArticleType.DIFFICULT_PROGRAMMING, 11)}`,
    },
  ], []);

  const onTabClick = useCallback((tab: TabItem) => {
    onChangeType(tab.value as ArticleType);
  }, [onChangeType]);

  return (
      <div className={classNames(classes.ArticleTypeTabs, {}, [className])}>
          <Tabs
              value={value}
              tabs={typeTabs}
              onTabClick={onTabClick}
          />
      </div>
  );
});
