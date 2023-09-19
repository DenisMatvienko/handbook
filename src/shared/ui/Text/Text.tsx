/**
 *    Text-component;
 *      - Use text component for add formatted text on page.
 *
 *    @param BACKGROUND_TEXT
 *      - Main text for use on main background color;
 *        UPD: on background (outside block's-component's background) should
 *             use as text and title this theme;
 *
 *    @param ERROR
 *      - Text for errors;
 *
 *    @param SECONDARY_INVERTED
 *      - Inverted color of "secondary" color text;
 *
 *    @param TEXT_WHITE
 *      - If using just text, color - white;
 *
 *    @param TEXT_BLACK
 *      - If using just text, color - dark;
 *
 *    @param LINK_LIGHT
 *      - If using text as link;
 *
 *    @param HEADER
 *      - When using just title;
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import classes from './Text.module.scss';

export enum TextTheme {
  BACKGROUND_TEXT = 'backgroundText',
  SECONDARY_INVERTED = 'secondaryInverted',
  TEXT_WHITE = 'textWhite',
  TEXT_BLACK = 'textBlack',
  LINK_LIGHT = 'linkLight',
  HEADER = 'header',
  ERROR = 'error',
  PRIMARY = 'primary',
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
