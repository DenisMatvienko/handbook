import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonRadius, ButtonTheme } from 'shared/ui/Button/Button';
import React, {
  memo, useCallback, useEffect, useState,
} from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Avatar, AvatarSize } from 'shared/ui/Avatar/Avatar';
import { getProfileForm } from 'entities/Profile';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import SearchIcon from 'shared/assets/icons/search/search.svg';
import CtrlIcon from 'shared/assets/icons/search/key-ctrl.svg';
import KIcon from 'shared/assets/icons/search/key-k.svg';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { NavbarSearch } from 'features/NavbarSearch/ui/NavbarSearch';
import { NavbarActions, NavbarReducer } from 'widgets/Navbar/model/slices/NavbarSlice';
import { getNavbarSearchIsOpen } from 'widgets/Navbar/model/selectors/getNavbarSelectors';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
  isDisplay?: boolean;
}

const initialReducers: ReducersList = {
  navbar: NavbarReducer,
};

const SEARCH_OPEN_KEY = 'k';
const PLATFORM_MAC = /Macintosh/;

export const Navbar = memo(({ className, isDisplay }: NavbarProps) => {
  const { t } = useTranslation('navbar');
  const [isAuthModal, setIsAuthModal] = useState(false);
  const searchIsOpen = useSelector(getNavbarSearchIsOpen);
  const isAuth = useSelector(getUserAuthData);
  const profile = useSelector(getProfileForm);
  const dispatch = useAppDispatch();

  const onCloseAuthModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowAuthModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onCloseSearchModal = useCallback(() => {
    dispatch(NavbarActions.setSearchIsOpen(false));
  }, [dispatch]);

  const onShowSearchModal = useCallback(() => {
    dispatch(NavbarActions.setSearchIsOpen(true));
  }, [dispatch]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if ((PLATFORM_MAC.test(navigator.userAgent) ? e.metaKey : e.ctrlKey) && e.key === SEARCH_OPEN_KEY) {
      e.preventDefault();
      onShowSearchModal();
    }
  }, [onShowSearchModal]);

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const mods: Mods = {
    [classes.navbar_show]: isDisplay,
  };

  if (isAuth) {
    return (
        <DynamicModuleLoader
            reducers={initialReducers}
            removeAfterUnmount
        >
            <header className={classNames(classes.navbar, mods, [className])}>
                <div className={classNames(classes.navbar__accountBar, {}, [className])}>
                    <Button
                        className={classes.navbar__search}
                        theme={ButtonTheme.SEARCH_NAV}
                        radius={ButtonRadius.ELLIPSE}
                        onClick={onShowSearchModal}
                    >
                        <Icon
                            className={classes.navbar__searchIcon}
                            Svg={SearchIcon}
                            theme={IconTheme.BLOCK_ICON}
                        />
                        <Text
                            className={classes.navbar__searchText}
                            text={t('Search')}
                            theme={TextTheme.BLOCK_TEXT}
                        />
                        <Icon
                            className={classes.navbar__ctrlIcon}
                            Svg={CtrlIcon}
                        />
                        <Icon
                            className={classes.navbar__kIcon}
                            Svg={KIcon}
                        />
                    </Button>
                    <NavbarSearch
                        className={classes.navbar__searchWindow}
                        isOpen={searchIsOpen}
                        onClose={onCloseSearchModal}
                    />
                    <ThemeSwitcher />
                    <div className={classes.navbar__avatar}>
                        <Avatar
                            size={AvatarSize.M}
                            src={isAuth?.avatar}
                            alt={profile?.username}
                        />
                        <div className={classes.navbar__username}>
                            <Text
                                text={`${isAuth.username},`}
                                theme={TextTheme.BACKGROUND_TEXT}
                            />
                        </div>
                    </div>
                    <Button
                        theme={ButtonTheme.BACKGROUND}
                        radius={ButtonRadius.SEMI_ELLIPSE}
                        className={classes.links}
                        onClick={onLogout}
                    >
                        {t('Выйти')}
                    </Button>
                </div>
            </header>
        </DynamicModuleLoader>
    );
  }

  return (
      <DynamicModuleLoader
          reducers={initialReducers}
          removeAfterUnmount
      >
          <header className={classNames(classes.navbar, {}, [className])}>
              <div className={classNames(classes.navbar__accountBar, {}, [className])}>
                  <Button
                      className={classes.navbar__search}
                      theme={ButtonTheme.SEARCH_NAV}
                      radius={ButtonRadius.ELLIPSE}
                      onClick={onShowSearchModal}
                  >
                      <Icon
                          className={classes.navbar__searchIcon}
                          Svg={SearchIcon}
                          theme={IconTheme.BLOCK_ICON}
                      />
                      <Text
                          className={classes.navbar__searchText}
                          text={t('Search')}
                          theme={TextTheme.BLOCK_TEXT}
                      />
                      <Icon
                          className={classes.navbar__ctrlIcon}
                          Svg={CtrlIcon}
                      />
                      <Icon
                          className={classes.navbar__kIcon}
                          Svg={KIcon}
                      />
                  </Button>
                  <NavbarSearch
                      className={classes.navbar__searchWindow}
                      isOpen={searchIsOpen}
                      onClose={onCloseSearchModal}
                  />
                  <div className={classes.navbar__theme}>
                      <ThemeSwitcher />
                  </div>
                  <Button
                      theme={ButtonTheme.BACKGROUND}
                      radius={ButtonRadius.SEMI_ELLIPSE}
                      className={classes.links}
                      onClick={onShowAuthModal}
                  >
                      {t('Войти')}
                  </Button>
                  {isAuthModal && (
                      <LoginModal
                          isOpen={isAuthModal}
                          onClose={onCloseAuthModal}
                      />
                  )}
              </div>
          </header>
      </DynamicModuleLoader>
  );
});

export default Navbar;
