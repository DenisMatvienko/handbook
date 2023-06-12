// button disabled when isLoading - true

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonRadius, ButtonTheme } from 'shared/ui/Button/Button';
import { Input, InputTheme } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { LoginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import classes from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    username, password, error, isLoading,
  } = useSelector(getLoginState);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(LoginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
      <div className={classNames(classes.LoginForm, {}, [className])}>
          <Text title={t('Вход')} theme={TextTheme.PRIMARY} />
          {error && <Text title={t('Некорректные данные')} theme={TextTheme.ERROR} />}
          <Input
              type="text"
              autofocus
              theme={InputTheme.SIMPLE}
              className={classes.input}
              placeholderTemplate={t('Введите логин')}
              onChange={onChangeUsername}
              value={username}
          />
          <Input
              type="text"
              theme={InputTheme.SIMPLE}
              className={classes.input}
              placeholderTemplate={t('Введите пароль')}
              onChange={onChangePassword}
              value={password}
          />
          <div className={classNames(classes.signInWrapper, {}, [])}>
              <Button
                  className={classes.loginBtn}
                  theme={ButtonTheme.BACKGROUND_WT_B_BT_P}
                  radius={ButtonRadius.SEMI_ELLIPSE}
                  onClick={onLoginClick}
                  disabled={isLoading}
              >
                  {t('Войти')}
              </Button>
          </div>
      </div>
  );
});
