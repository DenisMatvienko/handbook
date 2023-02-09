import { Theme, useTheme } from 'app/provider/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import DarkIcon from 'shared/assets/icons/lightbulb-solid.svg';
import LightIcon from 'shared/assets/icons/lightbulb-regular.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import classes from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
      <Button
          theme={ThemeButton.CLEAR}

          onClick={toggleTheme}
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
