/**
 *    ButtonToTop-component.
 *      - Move scroll to top, when scrollY more than 300
 */

import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { memo, useEffect, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import classes from './ButtonToTop.module.scss';

export enum ButtonToTopTheme {
    TRANSPARENT = 'transparent'
}

interface ButtonToTopProps {
    className?: string;
    theme?: ButtonToTopTheme;
}

export const ButtonToTop = memo((props: ButtonToTopProps) => {
  const { className, theme = ButtonToTopTheme.TRANSPARENT } = props;

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    });
  }, []);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const mods: Mods = {
    [classes[theme]]: isVisible,
  };

  return (
      <div className={classNames(classes.ButtonToTop, mods, [className])}>
          <Button
              onClick={goTop}
              theme={ButtonTheme.SCROLL_TOP}
          >
              <div className={classes.arrow} />
          </Button>
      </div>
  );
});
