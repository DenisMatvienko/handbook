/**
 *    LoaderRing-component.
 *
 */

import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import classes from './LoaderRing.module.scss';

export enum LoaderRingTheme {
    STATIC = 'ldsRing_static',
    DYNAMIC = 'ldsRing_dynamic',
}

interface LoaderRingProps {
    className?: string;
    theme?: LoaderRingTheme;
}

export const LoaderRing = memo((props: LoaderRingProps) => {
  const {
    className,
    theme = LoaderRingTheme.STATIC,
  } = props;
  const { t } = useTranslation();

  const mods: Mods = {
    [classes[theme]]: true,
  };

  return (
      <div className={classNames(classes.ldsRing, mods, [className])} />
  );
});
