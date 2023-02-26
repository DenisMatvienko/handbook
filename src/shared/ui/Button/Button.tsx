import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
  // Just for square buttons, with props 'square' = true
  NN = 'size_none',
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
  XXL = 'size_xxl',
}

export enum ButtonRadius {
  // SQUARE - radius just for square
  // SUPER_ELLIPSE - radius just for square
  // CIRCLE - radius just for square
  // SEMI_ELLIPSE - radius just for rectangles
  // ELLIPSE - radius just for rectangles
  SQUARE = 'radius_square',
  SUPER_ELLIPSE = 'radius_semi_super_ellipse',
  CIRCLE = 'radius_circle',
  SEMI_ELLIPSE = 'radius_semi_ellipse',
  ELLIPSE = 'radius_ellipse',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // button theme - have theme by colors for button
  // square - consider size's for button AND for content into button, button will always be squared
  // size - using just with square, beacouse size classes in Button.module include size of content
  // and size of button
  // radius - confirm shapes of button
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    radius?: ButtonRadius;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    square,
    size = ButtonSize.NN,
    radius = ButtonRadius.SQUARE,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [classes[theme]]: true,
    [classes.square]: square,
    [classes[size]]: true,
    [classes[radius]]: true,
  };

  return (
      <button
          type="button"
          className={classNames(
            classes.Button,
            mods,
            [className],
          )}
          {...otherProps}
      >
          {children}
      </button>
  );
};
