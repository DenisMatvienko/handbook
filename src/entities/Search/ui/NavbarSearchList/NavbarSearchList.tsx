/**
 *    NavbarSearchList-component.
 *      - NavbarSearchList
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { uid } from 'shared/lib/uid/uid';
import { NavbarSearchListItem } from 'entities/Search/ui/NavbarSearchListItem/NavbarSearchListItem';
import {
  Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { SkeletonNavbarSearchList } from 'shared/ui/Skeleton/SkeletonNavbarSearchList/SkeletonNavbarSearchList';
import { Search } from '../../model/types/search';
import classes from './NavbarSearchList.module.scss';

interface NavbarSearchListProps {
    className?: string;
    articles: Search[];
    isLoading?: boolean;
}

export const NavbarSearchList = memo((props: NavbarSearchListProps) => {
  const { className, articles, isLoading } = props;
  const { t } = useTranslation();

  const renderArticle = (search: Search) => (
      <NavbarSearchListItem
          key={uid()}
          article={search}
      />
  );

  const renderEmptyPull = () => (
      <div className={classes.navbarSearchList__empty}>
          <Text
              theme={TextTheme.SUBTITLE}
              text="Any matches not found"
              size={TextSize.M}
              align={TextAlign.CENTER}
          />
      </div>
  );

  if (isLoading) {
    return (
        <SkeletonNavbarSearchList />
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
