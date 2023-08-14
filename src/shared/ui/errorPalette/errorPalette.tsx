import React, { memo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import classes from './errorPalette.module.scss';

export enum ErrorPaletteTheme {
  DEFAULT = 'default',
}

export enum ErrorPaletteSize {
  NN = 'size_none',
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
  XXL = 'size_xxl',
}

interface ErrorPaletteProps {
  className?: string;
  children?: string;
  theme?: ErrorPaletteTheme;
  size?: ErrorPaletteSize;
}

export const ErrorPalette = memo((props: ErrorPaletteProps) => {
  const {
    className,
    children,
    theme = ErrorPaletteTheme.DEFAULT,
    size = ErrorPaletteSize.L,
    ...otherProps
  } = props;

  const mods: Mods = {
    [classes[theme]]: true,
    [classes[size]]: true,
  };

  return (
      <div
          className={classNames(classes.errorPallet, mods, [])}
          {...otherProps}
      >
          {children}
      </div>
  );
});
