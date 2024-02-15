/**
 *    NavbarSearch-component.
 *      - Search window which will opened from navbar
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { useCallback } from 'react';
import { Modal, ModalTheme } from 'shared/ui/Modal/Modal';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Input, InputTheme } from 'shared/ui/Input/Input';
import { navbarSearchActions, navbarSearchReducer } from 'features/NavbarSearch/model/slices/navbarSearchSlice';
import { getNavbarSearchArticleSelector } from 'features/NavbarSearch/model/selectors/getNavbarSearchSelectors';
import { uid } from 'shared/lib/uid/uid';
import {
  Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticleList/fetchArticlesList';
import { articlePageSliceActions, getArticles } from 'pages/ArticlesPage/model/slices/articlePageSlice';
import articlesPage from 'pages/ArticlesPage/ui/ArticlesPage/ArticlesPage';
import classes from './NavbarSearch.module.scss';

interface NavbarSearchProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
}

export const NavbarSearch = (props: NavbarSearchProps) => {
  const {
    className,
    isOpen,
    onClose,
  } = props;
  const { t } = useTranslation('filters');
  const search = useSelector(getNavbarSearchArticleSelector);
  const articles = useSelector(getArticles.selectAll);
  const dispatch = useAppDispatch();

  const initialReducers: ReducersList = {
    navbarSearch: navbarSearchReducer,
  };

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: false }));
  }, [dispatch]);

  const onChangeSearch = useCallback((newSearch: string) => {
    dispatch(navbarSearchActions.setSearch(newSearch));
    // dispatch(articlePageSliceActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  return (
      <DynamicModuleLoader
          reducers={initialReducers}
          removeAfterUnmount
      >
          <Modal
              className={classNames(classes.navbarSearch, {}, [className])}
              isOpen={isOpen}
              onClose={onClose}
              modalTheme={ModalTheme.NAVBAR_SEARCH}
              lazy
          >
              <div className={classes.navbarSearch__wrapper}>
                  <Input
                      className={classes.navbarSearch__search}
                      theme={InputTheme.NAVBAR_SEARCH}
                      onChange={onChangeSearch}
                      value={search}
                      placeholder={t('Search')}
                  />
              </div>
              <div className={classes.navbarSearch__text}>
                  { articles
                    ? <span>{articles.map((item) => item.title)}</span>
                    : (
                        <Text
                            key={uid()}
                            theme={TextTheme.SUBTITLE}
                            text={t('NoSearches')}
                            size={TextSize.S}
                            align={TextAlign.CENTER}
                        />
                    )}
              </div>
          </Modal>
      </DynamicModuleLoader>
  );
};
