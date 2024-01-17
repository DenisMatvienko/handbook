import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'app/provider/ThemeProvider';
import { ErrorPalette, ErrorPaletteSize, ErrorPaletteTheme } from 'shared/ui/ErrorPalette/ErrorPalette';
import classes from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
      <div className={classNames(classes.pageError, {}, [className, theme])}>
          <ErrorPalette
              theme={ErrorPaletteTheme.DEFAULT}
              text={t('Непредвиденная ошибка')}
              size={ErrorPaletteSize.L}
              refresh
          />
      </div>
  );
};
