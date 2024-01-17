/**
 *    Icon.
 *      - Wrapper for icons, to create svg-icons with complete size and themes;
 *
 *    @param BLOCK_ICON
 *      - All icons color (fill), match with 'block' color belonging to its themes;
 *
 *    @param WHITE_ICON
 *      - All icons with black color (fill);
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import classes from './Icon.module.scss';

export enum IconTheme {
  BLOCK_ICON = 'icon_color-for-block',
  WHITE_ICON = 'icon_color-white',
}

interface IconProps {
  className?: string;
  theme?: IconTheme;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo((props: IconProps) => {
  const {
    className,
    theme = IconTheme.BLOCK_ICON,
    Svg,
  } = props;

  const mods: Record<string, boolean> = {
    [classes[theme]]: true,
  };

  return (
      <Svg className={classNames(classes.icon, mods, [className])} />
  );
});
