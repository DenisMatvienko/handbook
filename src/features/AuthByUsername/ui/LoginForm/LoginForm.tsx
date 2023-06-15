/**
 *  <Button /> disabled when isLoading - true
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonRadius, ButtonTheme } from 'shared/ui/Button/Button';
import { Input, InputTheme } from 'shared/ui/Input/Input';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { memo, useCallback, useEffect } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ReduxStoreWithManager } from 'app/provider/StoreProvider';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import {
  getLoginUsername,
} from '../../model/selectors/getLoginUsername/getLoginUsername';
import {
  getLoginPassword,
} from '../../model/selectors/getLoginPassword/getLoginPassword';
import {
  getLoginIsLoading,
} from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { LoginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import classes from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
}

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);

  useEffect(() => {
  /**
   * In moment when component did mount we are add reducer
   */
    store.reducerManager.add('loginForm', loginReducer);
    dispatch({ type: '@INIT LoginForm' });

    return () => {
      /**
       * After all, when component not needed, component unmount and
       * remove reducer
       * Notice: component unmount because lazy, code splitting
       */
      store.reducerManager.remove('loginForm');
      dispatch({ type: '@DESTROY LoginForm' });
    };
  }, []);

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

export default LoginForm;
