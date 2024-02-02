/**
 *    ArticleSortSelector-component.
 *      - ArticleSortSelector with selector to filters widget
 *
 *    @note:
 *     problem:
 *      if add onChangeOrder or onChangeSort to Select component. Will throw error
 *      Type 'string' is not assignable to type 'ArticleSortField'.
 *      That  solve by type conversion:
 *
 *      const onChangeOrderHandler = useCallback((newOrder: string) => {
 *          onChangeOrder(newOrder as SortOrderType);
 *      }, [onChangeOrder]);
 *
 *      BUT THIS conversions IS BAD PRACTICE,
 *      Because: Select awaits one type (string), can receive another type (SortOrderType). Cause that, could be errors;
 *     solve:
 *      Should solve type error by GENERIC components.
 *      generic props don't work well with React.memo components
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo, useCallback, useMemo } from 'react';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { ArticleSortField } from 'entities/Article/model/types/article';
import { SortOrderType } from 'shared/types/sortOrder/sortOrderType';
import classes from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string;
    order: SortOrderType;
    sort: ArticleSortField;
    onChangeOrder: (newOrder: SortOrderType) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const {
    className,
    order,
    sort,
    onChangeOrder,
    onChangeSort,
  } = props;
  const { t } = useTranslation('filters');

  const orderOptions = useMemo<SelectOption<SortOrderType>[]>(() => [
    {
      value: 'asc',
      content: t('asc'),
    },
    {
      value: 'desc',
      content: t('desc'),
    },
  ], [t]);

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
    {
      value: ArticleSortField.TITLE,
      content: t('byTitle'),
    },
    {
      value: ArticleSortField.CREATED,
      content: t('byCreated'),
    },
    {
      value: ArticleSortField.VIEWS,
      content: t('byViews'),
    },
  ], [t]);

  return (
      <div className={classNames(classes.ArticleSortSelector, {}, [className])}>
          {/* THROW ERROR IN CONSOLE, **SOLVE */}
          <Select
              options={sortFieldOptions}
              name={t('Sort')}
              value={sort}
              onChange={onChangeSort}
          />
          <Select
              options={orderOptions}
              name={t('Order')}
              value={order}
              onChange={onChangeOrder}
          />
      </div>
  );
});
