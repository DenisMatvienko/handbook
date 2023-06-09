import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonRadius, ButtonTheme } from 'shared/ui/Button/Button';
import { Input, InputTheme } from 'shared/ui/Input/Input';
import classes from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  return (
      <div className={classNames(classes.LoginForm, {}, [className])}>
          <Input
              type="text"
              autofocus
              theme={InputTheme.SIMPLE}
              className={classes.input}
              placeholderTemplate={t('Введите логин')}

          />
          <Input
              type="text"
              theme={InputTheme.SIMPLE}
              className={classes.input}
              placeholderTemplate={t('Введите пароль')}
          />
          <div className={classNames(classes.signInWrapper, {}, [])}>
              <Button
                  className={classes.loginBtn}
                  theme={ButtonTheme.BACKGROUND_WT_B_BT_P}
                  radius={ButtonRadius.SEMI_ELLIPSE}
              >
                  {t('Войти')}
              </Button>
          </div>
      </div>
  );
};
