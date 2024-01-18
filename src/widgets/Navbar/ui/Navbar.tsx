import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonRadius, ButtonTheme } from 'shared/ui/Button/Button';
import React, {
  memo, useCallback, useEffect, useState,
} from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Avatar, AvatarSize } from 'shared/ui/Avatar/Avatar';
import { getProfileForm } from 'entities/Profile';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
    isDisplay?: boolean;
}

export const Navbar = memo(({ className, isDisplay }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const isAuth = useSelector(getUserAuthData);
  const profile = useSelector(getProfileForm);
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

  const mods: Mods = {
    [classes.navbar_show]: isDisplay,
  };

  if (isAuth) {
    return (
        <header className={classNames(classes.navbar, mods, [className])}>
            <div className={classNames(classes.navbar__accountBar, {}, [className])}>
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
