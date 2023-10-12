/**
 *    ButtonToTop-component.
 *      - Move scroll to top, when scrollY more than 300
 */

import { classNames, Mods } from 'shared/lib/classNames/classNames';
import {
  CSSProperties, memo, useEffect, useState,
} from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import classes from './ButtonToTop.module.scss';

export enum ButtonToTopTheme {
    NONE = 'none',
    TRANSPARENT = 'transparent',
}

interface ButtonToTopProps {
    className?: string;
    theme?: ButtonToTopTheme;
    display?: string;
}

export const ButtonToTop = memo((props: ButtonToTopProps) => {
  const { className, theme = ButtonToTopTheme.NONE, display } = props;

  const [isDisplay, setIsDisplay] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 1000) {
        setIsDisplay(true);
      } else {
        setIsDisplay(false);
      }
    });
  }, []);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const stylesContent: CSSProperties = {
    display: isDisplay ? 'flex' : 'none',
  };

  return (
      <div
          className={classNames(classes.ButtonToTop, {}, [className])}
          style={stylesContent}
      >
          <Button
              onClick={goTop}
              theme={ButtonTheme.SCROLL_TOP}
          >
              <div className={classes.arrow} />
          </Button>
      </div>
  );
});
