/**
 *    Text-component;
 *      - Use text component for add formatted text on page.
 *
 *    @param BACKGROUND_TEXT
 *      - Main text for use on main background color;
 *        UPD: on background (outside block's-component's background) should
 *             use as text and title this theme;
 *
 *    @param BLOCK_TEXT
 *      - Main text for use ONLY IN BLOCKS;
 *
 *    @param SUBTITLE
 *      - Text for subtitles of articles;
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
  BLOCK_TEXT='blockText',
  SECONDARY_INVERTED = 'secondaryInverted',
  TEXT_WHITE = 'textWhite',
  SUBTITLE='subtitle',
  ERROR = 'error',
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

export enum TextSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  textWhite?: string;
  linkLight?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    textWhite,
    linkLight,
    theme = TextTheme.BLOCK_TEXT,
    align = TextAlign.CENTER,
    size = TextSize.M,
  } = props;

  const mods: Record<string, boolean> = {
    [classes[theme]]: true,
    [classes[align]]: true,
    [classes[size]]: true,
  };

  return (
      <div className={classNames(classes.Text, mods, [className])}>
          {title && <p className={classes.title}>{title}</p>}
          {text && <p className={classes.text}>{text}</p>}
      </div>
  );
});
