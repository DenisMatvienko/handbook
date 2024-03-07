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
import {
  getSearchArticles,
  navbarSearchActions,
  navbarSearchReducer,
} from 'features/NavbarSearch/model/slices/navbarSearchSlice';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { fetchNavbarSearch } from 'features/NavbarSearch/model/services/fetchNavbarSearch';
import { NavbarSearchList } from 'entities/Search/ui/NavbarSearchList/NavbarSearchList';
import { getNavbarSearchArticleSelector } from '../model/selectors/getNavbarSearchSelectors';
import classes from './NavbarSearch.module.scss';

interface NavbarSearchProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
}

const initialReducers: ReducersList = {
  navbarSearch: navbarSearchReducer,
};

export const NavbarSearch = (props: NavbarSearchProps) => {
  const {
    className,
    isOpen,
    onClose,
  } = props;
  const { t } = useTranslation('filters');
  const search = useSelector(getNavbarSearchArticleSelector);
  const articles = useSelector(getSearchArticles.selectAll);
  const isLoading = true;
  const dispatch = useAppDispatch();

  const fetchData = useCallback(() => {
    dispatch(fetchNavbarSearch({ replace: true }));
  }, [dispatch]);

  const onChangeSearch = useCallback((newSearch: string) => {
    dispatch(navbarSearchActions.setSearch(newSearch));
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
              <NavbarSearchList
                  articles={articles}
                  isLoading={isLoading}
              />
          </Modal>
      </DynamicModuleLoader>
  );
};
