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
  BACKGROUND_TEXT = 'text_background',
  BLOCK_TEXT='text_block',
  SECONDARY_INVERTED = 'text_secondary_inverted',
  TEXT_WHITE = 'text_white',
  TRANSLUCENT = 'text_translucent',
  SUBTITLE='text_subtitle',
  ERROR = 'text_error',
}

export enum TextAlign {
  RIGHT = 'text_right',
  LEFT = 'text_left',
  CENTER = 'text_center',
}

export enum TextSize {
  XS = 'text_size_xs',
  S = 'text_size_s',
  M = 'text_size_m',
  L = 'text_size_l',
  XL = 'text_size_xl',
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
      <div className={classNames(classes.text, mods, [className])}>
          {title && <h1 className={classes.text__title}>{title}</h1>}
          {text && <p className={classes.text__paragraph}>{text}</p>}
      </div>
  );
});
