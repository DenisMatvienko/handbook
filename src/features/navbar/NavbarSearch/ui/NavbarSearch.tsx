/**
 *    NavbarSearch-component.
 *      - Search window which will opened from navbar
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { useCallback, useState } from 'react';
import { Modal, ModalTheme } from 'shared/ui/Modal/Modal';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Input, InputTheme } from 'shared/ui/Input/Input';
import {
  getSearchArticles,
  navbarSearchActions,
  navbarSearchReducer,
} from 'features/navbar/NavbarSearch/model/slices/navbarSearchSlice';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import {
  fetchNavbarSearch,
} from 'features/navbar/NavbarSearch/model/services/fetchNavbarSearch/fetchNavbarSearch';
import { NavbarSearchList } from 'entities/Search/ui/NavbarSearchList/NavbarSearchList';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import SearchIcon from 'shared/assets/icons/search/search.svg';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import { LoaderRing } from 'shared/ui/Loaders/LoaderRing/LoaderRing';
import {
  getNavbarIsLoadingSelector,
  getNavbarSearchArticleSelector,
} from '../model/selectors/getNavbarSearchSelectors';
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
  const isLoading = useSelector(getNavbarIsLoadingSelector);
  const dispatch = useAppDispatch();
  const [isEntered, setIsEntered] = useState(false);

  const fetchData = useCallback(() => {
    dispatch(fetchNavbarSearch({ replace: true }));
  }, [dispatch]);

  const debounceFetchData = useDebounce(fetchData, 500);

  const onChangeSearch = useCallback((newSearch: string) => {
    dispatch(navbarSearchActions.setSearch(newSearch));
    dispatch(navbarSearchActions.setPage(1));
    debounceFetchData();

    if (newSearch.length > 0) {
      setIsEntered(true);
    }
  }, [dispatch, debounceFetchData]);

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
                  { isLoading
                    ? (
                        <LoaderRing
                            className={classes.navbarSearch__loader}
                        />
                    )
                    : (
                        <Icon
                            className={classes.navbarSearch__icon}
                            Svg={SearchIcon}
                            theme={IconTheme.BLOCK_ICON}
                        />
                    )}

                  <Input
                      className={classes.navbarSearch__search}
                      autofocus
                      theme={InputTheme.NAVBAR_SEARCH}
                      onChange={onChangeSearch}
                      value={search}
                      placeholder={t('Search')}
                  />
              </div>
              <NavbarSearchList
                  articles={articles}
                  isLoading={isLoading}
                  isEntered={isEntered}
              />
          </Modal>
      </DynamicModuleLoader>
  );
};
