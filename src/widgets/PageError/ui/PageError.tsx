import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonRadius, ButtonTheme } from 'shared/ui/Button/Button';
import { useTheme } from 'app/provider/ThemeProvider';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import {
  ErrorPalette,
  ErrorPaletteSize,
  ErrorPaletteTheme,
} from 'shared/ui/ErrorPalette/ErrorPalette';
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
          <ErrorPalette
              theme={ErrorPaletteTheme.DEFAULT}
              text={t('Непредвиденная ошибка')}
              size={ErrorPaletteSize.L}
              refresh
          />
      </div>
  );
};
