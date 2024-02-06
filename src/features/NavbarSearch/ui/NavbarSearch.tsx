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
import { navbarSearchSliceActions } from 'features/NavbarSearch/model/slices/navbarSearchSlice';
import { getNavbarSearchSelector } from 'features/NavbarSearch/model/selectors/getNavbarSearchSelectors';
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
  const search = useSelector(getNavbarSearchSelector);
  const dispatch = useAppDispatch();

  const onChangeSearch = useCallback((newSearch: string) => {
    dispatch(navbarSearchSliceActions.setSearch(newSearch));
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
