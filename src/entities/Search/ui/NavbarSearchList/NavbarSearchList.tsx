/**
 *    NavbarSearchList-component.
 *      NavbarSearchList - contain list of articles which match by query;
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { uid } from 'shared/lib/uid/uid';
import { NavbarSearchListItem } from 'entities/Search/ui/NavbarSearchListItem/NavbarSearchListItem';
import {
  Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { SkeletonNavbarSearchList } from 'shared/ui/Skeleton/SkeletonNavbarSearchList/SkeletonNavbarSearchList';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getNavbarSearchArticleSelector } from 'features/NavbarSearch/model/selectors/getNavbarSearchSelectors';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { Search } from '../../model/types/search';
import classes from './NavbarSearchList.module.scss';

interface NavbarSearchListProps {
    className?: string;
    articles: Search[];
    isLoading?: boolean;
    isEntered: boolean;
}

export const NavbarSearchList = memo((props: NavbarSearchListProps) => {
  const {
    className, articles, isLoading, isEntered,
  } = props;

  const { t } = useTranslation('filters');
  const search = useSelector(getNavbarSearchArticleSelector);

  const renderArticle = (search: Search) => (
      <NavbarSearchListItem
          key={uid()}
          article={search}
      />
  );

  const renderEmptyPull = useCallback(() => (
      <div className={classes.navbarSearchList__empty}>
          <Text
              theme={TextTheme.SUBTITLE}
              text="No result for"
              size={TextSize.M}
              align={TextAlign.CENTER}
          />
          <Text
              theme={TextTheme.BLOCK_TEXT}
              title={`"${search}"`}
              align={TextAlign.CENTER}
          />
      </div>
  ), [search]);

  if (isLoading) {
    return (
        <SkeletonNavbarSearchList />
    );
  }

  if (!isEntered) {
    return (
        <div className={classNames(classes.navbarSearchList, {}, [className])}>
            <div className={classes.navbarSearchList__empty}>
                <Text
                    theme={TextTheme.SUBTITLE}
                    text="hello, type here something"
                    size={TextSize.M}
                    align={TextAlign.CENTER}
                />
            </div>
        </div>
    );
  }

  return (
      <div className={classNames(classes.navbarSearchList, {}, [className])}>
          {
              articles.length > 0
                ? articles?.map(renderArticle)
                : renderEmptyPull()
          }
      </div>
  );
});
