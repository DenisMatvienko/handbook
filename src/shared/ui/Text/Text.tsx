import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import classes from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
  SECONDARY_INVERTED = 'secondaryInverted',
  TEXT_WHITE = 'textWhite',
  TEXT_BLACK = 'textBlack',
  LINK_LIGHT = 'linkLight',
  HEADER = 'header',
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  textWhite?: string;
  linkLight?: string;
  theme?: TextTheme;
  align?: TextAlign;
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    textWhite,
    linkLight,
    theme = TextTheme.PRIMARY,
    align = TextAlign.CENTER,
  } = props;

  const mods: Record<string, boolean> = {
    [classes[theme]]: true,
    [classes[align]]: true,
  };

  return (
      <div className={classNames(classes.Text, mods, [className])}>
          {title && <p className={classes.title}>{title}</p>}
          {text && <p className={classes.text}>{text}</p>}
          {linkLight && <p className={classes.linkLight}>{text}</p>}
          {textWhite && <p className={classes.textWhite}>{text}</p>}
      </div>
  );
});
