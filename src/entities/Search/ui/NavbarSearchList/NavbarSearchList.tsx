/**
 *    NavbarSearchList-component.
 *      Contain list of articles which match by query;
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
import { useSelector } from 'react-redux';
import {
  getNavbarErrorSelector,
  getNavbarSearchArticleSelector,
} from 'features/navbar/NavbarSearch/model/selectors/getNavbarSearchSelectors';
import { Page } from 'widgets/Page/Page';
import {
  fetchNextNavbarSearchPage,
} from 'features/navbar/NavbarSearch/model/services/fetchNextNavbarSearchPage/fetchNextNavbarSearchPage';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { initNavbarSearch } from 'features/navbar/NavbarSearch/model/services/initNavbarSearch/initNavbarSearch';
import { ArticleView } from 'entities/Article';
import { SkeletonArticleListItem } from 'shared/ui/Skeleton/SkeletonArticleListItem/SkeletonArticleListItem';
import { navbarSearchActions } from 'features/navbar/NavbarSearch/model/slices/navbarSearchSlice';
import { Search } from '../../model/types/search';
import classes from './NavbarSearchList.module.scss';

interface NavbarSearchListProps {
    className?: string;
    articles: Search[];
    isLoading?: boolean;
    isEntered: boolean;
}

const getSkeletons = () => (
    <SkeletonNavbarSearchList />
);

export const NavbarSearchList = memo((props: NavbarSearchListProps) => {
  const {
    className, articles, isLoading, isEntered,
  } = props;

  const { t } = useTranslation('filters');
  const search = useSelector(getNavbarSearchArticleSelector);
  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    dispatch(initNavbarSearch());
  });

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextNavbarSearchPage());
  }, [dispatch]);

  const renderArticle = (search: Search) => (
      <NavbarSearchListItem
          key={uid()}
          article={search}
      />
  );

  if (!isEntered) {
    return (
        <div className={classNames(classes.navbarSearchList, {}, [className])}>
            <div className={classes.navbarSearchList__empty}>
                <Text
                    theme={TextTheme.SUBTITLE}
                    title={t('TypeHere')}
                    size={TextSize.M}
                    align={TextAlign.CENTER}
                />
            </div>
        </div>
    );
  }

  if (!isLoading && !articles.length) {
    return (
        <div className={classes.navbarSearchList__empty}>
            <Text
                theme={TextTheme.SUBTITLE}
                title={t('NoResultFor')}
                size={TextSize.M}
                align={TextAlign.CENTER}
            />
            <Text
                className={classes.navbarSearchList__searchResultText}
                theme={TextTheme.BLOCK_TEXT}
                title={`"${search}"`}
                align={TextAlign.CENTER}
            />
        </div>
    );
  }

  return (
      <Page
          className={classNames(classes.navbarSearchList, {}, [className])}
          onScrollEnd={onLoadNextPart}
          emptyLayout
      >
          { articles.length > 0 && articles?.map(renderArticle) }
          { isLoading && getSkeletons()}
      </Page>
  );
});
