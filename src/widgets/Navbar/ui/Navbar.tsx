import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonRadius, ButtonTheme } from 'shared/ui/Button/Button';
import React, { memo, useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Avatar, AvatarSize } from 'shared/ui/Avatar/Avatar';
import { getProfileForm } from 'entities/Profile';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { getArticlePageSearch } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { articlePageSliceActions } from 'pages/ArticlesPage/model/slices/articlePageSlice';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import SearchIcon from 'shared/assets/icons/search/search.svg';
import CtrlIcon from 'shared/assets/icons/search/key-ctrl.svg';
import KIcon from 'shared/assets/icons/search/key-k.svg';
import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
  isDisplay?: boolean;
}

export const Navbar = memo(({ className, isDisplay }: NavbarProps) => {
  const { t } = useTranslation('navbar');
  const [isAuthModal, setIsAuthModal] = useState(false);
  const isAuth = useSelector(getUserAuthData);
  const profile = useSelector(getProfileForm);
  const search = useSelector(getArticlePageSearch);
  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const onChangeSearch = useCallback((newSearch: string) => {
    dispatch(articlePageSliceActions.setSearch(newSearch));
  }, [dispatch]);

  const mods: Mods = {
    [classes.navbar_show]: isDisplay,
  };

  // <Input
  //     className={classes.navbar__search}
  //     theme={InputTheme.SEARCH_NAV}
  //     onChange={onChangeSearch}
  //     value={search}
  //     placeholder={t('Search')}
  // />

  if (isAuth) {
    return (
        <header className={classNames(classes.navbar, mods, [className])}>
            <div className={classNames(classes.navbar__accountBar, {}, [className])}>
                <Button
                    className={classes.navbar__search}
                    theme={ButtonTheme.SEARCH_NAV}
                    radius={ButtonRadius.ELLIPSE}
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
                  onClick={onShowModal}
              >
                  {t('Войти')}
              </Button>
              {isAuthModal && (
              <LoginModal
                  isOpen={isAuthModal}
                  onClose={onCloseModal}
              />
              )}
          </div>
      </header>
  );
});

export default Navbar;
