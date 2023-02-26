import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonRadius, ButtonTheme } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };

  return (
      <Button
          className={classNames('', {}, [className])}
          onClick={toggle}
          theme={ButtonTheme.BACKGROUND_INVERTED}
          radius={ButtonRadius.SEMI_ELLIPSE}
      >
          {t(short ? 'Короткий язык' : 'Язык')}
      </Button>
  );
};
