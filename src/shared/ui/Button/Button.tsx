/**
 *  - Button ui-element
 *    button theme - have theme by colors and shapes for button
 *    square - consider size's for button AND for content into button, button will always be squared
 *    size - using just with square, beacouse size classes in Button.module include size of content
 *    and size of button
 *    radius - confirm shapes of button
 *  @param ButtonTheme
 *    list of theme's where value is: css-selector
 *  @param ButtonSize
 *    Use with square buttons-radius, with props 'square' = true
 *  @param ButtonRadius
 *   SQUARE - radius just for square
 *   SUPER_ELLIPSE - radius just for square
 *   CIRCLE - radius just for square
 *   SEMI_ELLIPSE - radius just for rectangles
 *   ELLIPSE - radius just for rectangles
 *
 *   @error Common mistake's
 *    TS2538: Type 'undefined' cannot be used as an index type.
 *    Example: Field theme in ButtonProps, is not necessary field, that field can get undefined
 *    Solving: Need add to props, default theme ()
 */

import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import classes from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'button_clear',
  OUTLINE = 'button_outline',
  CANCEL = 'button_cancel',
  SAVE = 'button_save',
  SCROLL_TOP = 'button_scrollTop',
  BACKGROUND = 'button_background',
  BACKGROUND_BLOCK = 'button_backgroundBlock',
  BACKGROUND_LBLACK_DPURPLE = 'button_backgroundBlackPurple',
}

export enum ButtonSize {
  NN = 'button_size_none',
  M = 'button_size_m',
  L = 'button_size_l',
  XL = 'button_size_xl',
  XXL = 'button_size_xxl',
}

export enum ButtonRadius {
  SQUARE = 'button_radius_square',
  SUPER_ELLIPSE = 'button_radius_semi_super_ellipse',
  CIRCLE = 'button_radius_circle',
  SEMI_ELLIPSE = 'button_radius_semi_ellipse',
  ELLIPSE = 'button_radius_ellipse',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  radius?: ButtonRadius;
  children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    theme = ButtonTheme.BACKGROUND_LBLACK_DPURPLE,
    square,
    size = ButtonSize.NN,
    radius = ButtonRadius.SQUARE,
    disabled,
    ...otherProps
  } = props;

  const mods: Mods = {
    [classes[theme]]: true,
    [classes.button_square]: square,
    [classes[size]]: true,
    [classes[radius]]: true,
    [classes.button_disabled]: disabled,
  };

  return (
      <button
          type="button"
          className={classNames(
            classes.button,
            mods,
            [className],
          )}
          disabled={disabled}
          {...otherProps}
      >
          {children}
      </button>
  );
});
