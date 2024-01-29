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
import { NavbarSearch } from 'features/NavbarSearch/NavbarSearch';
import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
  isDisplay?: boolean;
}

const SEARCH_OPEN_KEY = 'k';

export const Navbar = memo(({ className, isDisplay }: NavbarProps) => {
  const { t } = useTranslation('navbar');
  const [isAuthModal, setIsAuthModal] = useState(false);
  const [isSearchModal, setIsSearchModal] = useState(false);
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
    setIsSearchModal(false);
  }, []);

  const onShowSearchModal = useCallback(() => {
    setIsSearchModal(true);
  }, []);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.ctrlKey && e.key === SEARCH_OPEN_KEY) {
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
                    isOpen={isSearchModal}
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
    );
  }

  return (
      <header className={classNames(classes.navbar, {}, [className])}>
          <div className={classNames(classes.navbar__accountBar, {}, [className])}>
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
  );
});

export default Navbar;
