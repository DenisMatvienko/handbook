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
  CLEAR = 'clear',
  OUTLINE = 'outline',
  CANCEL = 'cancel',
  SAVE = 'save',
  BACKGROUND_LWHITE_DPURPLE = 'backgroundWhitePurple',
  BACKGROUND_LBLACK_DPURPLE = 'backgroundBlackPurple',
}

export enum ButtonSize {
  NN = 'size_none',
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
  XXL = 'size_xxl',
}

export enum ButtonRadius {
  SQUARE = 'radius_square',
  SUPER_ELLIPSE = 'radius_semi_super_ellipse',
  CIRCLE = 'radius_circle',
  SEMI_ELLIPSE = 'radius_semi_ellipse',
  ELLIPSE = 'radius_ellipse',
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
    [classes.square]: square,
    [classes[size]]: true,
    [classes[radius]]: true,
    [classes.disabled]: disabled,
  };

  return (
      <button
          type="button"
          className={classNames(
            classes.Button,
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
