import { Theme, useTheme } from 'app/provider/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import DarkIcon from 'shared/assets/icons/light-theme.svg';
import LightIcon from 'shared/assets/icons/dark-theme.svg';
import {
  Button, ButtonRadius, ButtonSize, ButtonTheme,
} from 'shared/ui/Button/Button';
import { memo } from 'react';
import classes from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
      <Button
          className={classes.themeSwitcher}
          onClick={toggleTheme}
          theme={ButtonTheme.CLEAR}
          square
          size={ButtonSize.L}
          radius={ButtonRadius.SUPER_ELLIPSE}
      >
          {theme === Theme.DARK
            ? (
                <DarkIcon className={classNames(classes.themeSwitcher__darkIcon, {}, [])} />
            )
            : (
                <LightIcon className={classNames(classes.themeSwitcher__lightIcon, {}, [])} />
            )}
      </Button>
  );
});
