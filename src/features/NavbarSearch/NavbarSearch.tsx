/**
 *    NavbarSearch-component.
 *      - Search window which will opened from navbar
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo, useCallback, useRef } from 'react';
import { Modal, ModalTheme } from 'shared/ui/Modal/Modal';
import { useSelector } from 'react-redux';
import { getArticlePageSearch } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { articlePageSliceActions } from 'pages/ArticlesPage/model/slices/articlePageSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Input, InputTheme } from 'shared/ui/Input/Input';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import SearchIcon from 'shared/assets/icons/search/search.svg';
import classes from './NavbarSearch.module.scss';
import IntrinsicAttributes = React.JSX.IntrinsicAttributes;

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
  const search = useSelector(getArticlePageSearch);
  const dispatch = useAppDispatch();

  const onChangeSearch = useCallback((newSearch: string) => {
    dispatch(articlePageSliceActions.setSearch(newSearch));
  }, [dispatch]);

  return (
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
      </Modal>
  );
};
