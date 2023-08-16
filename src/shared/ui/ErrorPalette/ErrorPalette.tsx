import React, { FC, memo, useState } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Button, ButtonRadius, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import classes from './ErrorPalette.module.scss';

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
  title?: string;
  text?: string;
  theme?: ErrorPaletteTheme;
  size?: ErrorPaletteSize;
  refresh?: boolean;
}

export const ErrorPalette: FC<ErrorPaletteProps> = memo((props: ErrorPaletteProps) => {
  const {
    className,
    title,
    text,
    theme = ErrorPaletteTheme.DEFAULT,
    size = ErrorPaletteSize.L,
    refresh = false,
    ...otherProps
  } = props;

  const { t } = useTranslation('profile');

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  const mods: Mods = {
    [classes[theme]]: true,
    [classes[size]]: true,
  };

  if (refresh) {
    return (
        <div className={classNames(classes.ProfileCardWrapper)}>
            <div
                className={classNames(classes.errorPallete, mods, [])}
                {...otherProps}
            >
                <Text
                    text={text}
                    title={title}
                    theme={TextTheme.TEXT_WHITE}
                />
            </div>
            <div className={classNames(classes.ProfileCardButton)}>
                <Button
                    onClick={reloadPage}
                    theme={ButtonTheme.BACKGROUND}
                    radius={ButtonRadius.SEMI_ELLIPSE}
                >
                    {t('Обновить страницу')}
                </Button>
            </div>
        </div>
    );
  }

  return (
      <div className={classNames(classes.ProfileCardWrapper)}>
          <div
              className={classNames(classes.errorPallete, mods, [])}
              {...otherProps}
          >
              <Text
                  text={text}
                  title={title}
                  theme={TextTheme.TEXT_WHITE}
              />
          </div>
      </div>
  );
});
