import { Theme, useTheme } from 'app/provider/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import DarkIcon from 'shared/assets/icons/light-theme.svg';
import LightIcon from 'shared/assets/icons/dark-theme.svg';
import {
  Button, ButtonRadius, ButtonSize, ButtonTheme,
} from 'shared/ui/Button/Button';
import classes from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
      <Button
          onClick={toggleTheme}
          theme={ButtonTheme.OUTLINE}
          square
          size={ButtonSize.L}
          radius={ButtonRadius.SUPER_ELLIPSE}
      >
          {theme === Theme.DARK
            ? (
                <DarkIcon className={classNames(classes.DarkIcon, {}, [])} />
            )
            : (
                <LightIcon className={classNames(classes.LightIcon, {}, [])} />
            )}
      </Button>
  );
};
