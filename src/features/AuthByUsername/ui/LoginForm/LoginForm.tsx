/**
 *    LoginForm
 *      - Form which allow to add username and passwords for login in service
 *
 *    @param  disabled
 *      - in <Button/> component. Button become disabled when isLoading - true
 *    @param onChangeUsername
 *      - change username state by action from loginSlice
 *    @param onChangePassword
 *      - change password state by action from loginSlice
 *    @param onSuccess
 *      - add props onClose when response data - fulfilled. That move close
 *      modal window, when logout
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonRadius, ButtonTheme } from 'shared/ui/Button/Button';
import { Input, InputTheme } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import React, {
  memo, MutableRefObject, useCallback, useRef, useState,
} from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import EyeIconOn from 'shared/assets/icons/eye.svg';
import EyeIconOff from 'shared/assets/icons/eye-off.svg';
import {
  ErrorPalette,
  ErrorPaletteSize,
  ErrorPaletteTheme,
} from 'shared/ui/ErrorPalette/ErrorPalette';
import { Icon } from 'shared/ui/Icon/Icon';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { LoginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import classes from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const LoginForm = memo(({
  className,
  onSuccess,
}: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);
  const [showPassword, setShowPassword] = useState(false);

  const onShowPasswordVisibility = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  const initialReducers: ReducersList = {
    loginForm: loginReducer,
  };

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(LoginByUsername({
      username,
      password,
    }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [onSuccess, dispatch, username, password]);

  return (
      <DynamicModuleLoader
          removeAfterUnmount
          reducers={initialReducers}
      >
          <div className={classNames(classes.LoginForm, {}, [className])}>
              <Text text={t('Вход')} theme={TextTheme.BLOCK_TEXT} />
              {error && (
              <div className={classes.ErrorPaletteWrapper}>
                  <ErrorPalette
                      theme={ErrorPaletteTheme.DEFAULT}
                      text={t('Некорректные данные')}
                      size={ErrorPaletteSize.L}
                  />
              </div>
              )}
              <Input
                  type="text"
                  autofocus
                  theme={InputTheme.SIMPLE}
                  className={classes.input}
                  placeholderTemplate={t('Введите логин')}
                  onChange={onChangeUsername}
                  value={username}
              />
              <div className={classes.passwordWrapper}>
                  <Input
                      type={showPassword ? 'text' : 'password'}
                      theme={InputTheme.SIMPLE}
                      className={classes.inputPassword}
                      placeholderTemplate={t('Введите пароль')}
                      onChange={onChangePassword}
                      value={password}
                  />
                  <Button
                      className={classes.showPasswordBtn}
                      theme={ButtonTheme.CLEAR}
                      radius={ButtonRadius.CIRCLE}
                      onClick={onShowPasswordVisibility}
                      disabled={isLoading}
                  >
                      { showPassword
                        ? (
                            <Icon
                                className={classes.inputIcon}
                                Svg={EyeIconOff}
                            />
                        )
                        : (
                            <Icon
                                className={classes.inputIcon}
                                Svg={EyeIconOn}
                            />
                        )}
                  </Button>
              </div>
              <div className={classNames(classes.signInWrapper, {}, [])}>
                  <Button
                      className={classes.loginBtn}
                      theme={ButtonTheme.BACKGROUND_BLACK}
                      radius={ButtonRadius.SEMI_ELLIPSE}
                      onClick={onLoginClick}
                      disabled={isLoading}
                  >
                      {t('Войти')}
                  </Button>
              </div>
          </div>
      </DynamicModuleLoader>
  );
});

export default LoginForm;
