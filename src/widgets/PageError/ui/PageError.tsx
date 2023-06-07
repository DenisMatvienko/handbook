import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonRadius, ButtonTheme } from 'shared/ui/Button/Button';
import { useTheme } from 'app/provider/ThemeProvider';
import classes from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
      <div className={classNames(classes.PageError, {}, [className, theme])}>
          <p>{t('Непредвиденная ошибка')}</p>
          <Button
              onClick={reloadPage}
              theme={ButtonTheme.BACKGROUND}
              radius={ButtonRadius.SEMI_ELLIPSE}
          >
              {t('Обновить страницу')}
          </Button>
      </div>
  );
};
