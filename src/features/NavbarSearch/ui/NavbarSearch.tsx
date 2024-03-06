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
import { uid } from 'shared/lib/uid/uid';
import {
  Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useNavigate } from 'react-router-dom';
import { fetchNavbarSearch } from 'features/NavbarSearch/model/services/fetchNavbarSearch';
import { Article } from 'entities/Article';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
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
  const navigate = useNavigate();

  const initialReducers: ReducersList = {
    navbarSearch: navbarSearchReducer,
  };

  const paragraph = articles.map((item, index) => (
      <div className={classes.navbarSearch__title}>
          <span>
              {item.title}
          </span>
      </div>
  ));

  // const onOpenArticles = useCallback(() => {
  //   navigate(RoutePath.article_details + articles.id);
  // }, [articles.id, navigate]);

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
              {/* Will be component Navbar search list - like ArticleList */}
              <div className={classes.navbarSearch__text}>
                  { articles
                    ? paragraph
                    : (
                        // Will be component NavbarSearchListItem - like ArticleListItem
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
