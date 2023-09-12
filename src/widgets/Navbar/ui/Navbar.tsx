import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonRadius, ButtonTheme } from 'shared/ui/Button/Button';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Avatar, AvatarSize } from 'shared/ui/Avatar/Avatar';
import { getProfileForm } from 'entities/Profile';
import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const isAuth = useSelector(getUserAuthData);
  const dispatch = useDispatch();
  const data = useSelector(getProfileForm);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (isAuth) {
    return (
        <div className={classNames(classes.Navbar, {}, [className])}>
            <div className={classNames(classes.accountBar, {}, [className])}>
                <div className={classes.usernameAvatar}>
                    <Avatar
                        size={AvatarSize.M}
                        src={data?.avatar}
                        alt={data?.username}
                    />
                </div>
                <div className={classes.usernameLinks}>
                    <Text
                        text={`${isAuth.username},`}
                        theme={TextTheme.LINK_LIGHT}
                    />
                </div>
                <Button
                    theme={ButtonTheme.BACKGROUND_BLACK}
                    radius={ButtonRadius.SEMI_ELLIPSE}
                    className={classes.links}
                    onClick={onLogout}
                >
                    {t('Выйти')}
                </Button>
            </div>
        </div>
    );
  }

  return (
      <div className={classNames(classes.Navbar, {}, [className])}>
          <Button
              theme={ButtonTheme.BACKGROUND_BLACK}
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
  );
});

export default Navbar;
