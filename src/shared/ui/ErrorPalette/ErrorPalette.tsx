import React, { FC } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Button, ButtonRadius, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import classes from './ErrorPalette.module.scss';

export enum ErrorPaletteTheme {
  DEFAULT = 'errorPallet_default',
}

export enum ErrorPaletteSize {
  NN = 'errorPallet_size-none',
  AUTO = 'errorPallet_size-auto',
  M = 'errorPallet_size-m',
  L = 'errorPallet_size-l',
  XL = 'errorPallet_size-xl',
  XXL = 'errorPallet_size-xxl',
}

interface ErrorPaletteProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: ErrorPaletteTheme;
  size?: ErrorPaletteSize;
  refresh?: boolean;
}

export const ErrorPalette: FC<ErrorPaletteProps> = (props: ErrorPaletteProps) => {
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
        <div className={classNames(classes.errorPallet)}>
            <div
                className={classNames(classes.errorPallet__wrapper, mods, [])}
                {...otherProps}
            >
                <Text
                    text={text}
                    title={title}
                    theme={TextTheme.TEXT_WHITE}
                    align={TextAlign.CENTER}
                />
            </div>
            <div className={classNames(classes.errorPallet__refreshButton)}>
                <Button
                    onClick={reloadPage}
                    theme={ButtonTheme.BACKGROUND}
                    radius={ButtonRadius.SEMI_ELLIPSE}
                >
                    {t('RefreshPage')}
                </Button>
            </div>
        </div>
    );
  }

  return (
      <div className={classNames(classes.errorPallet)}>
          <div
              className={classNames(classes.errorPallet__wrapper, mods, [])}
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
};
