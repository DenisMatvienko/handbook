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
import classes from './ArticleTypeTabs.module.scss';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const {
    className,
    value,
    onChangeType,
  } = props;

  const { t } = useTranslation();

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
