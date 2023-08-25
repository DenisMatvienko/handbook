/**
 *  - Avatar ui-element
 */

import { classNames, Mods } from 'shared/lib/classNames/classNames';
import DefaultAvatar from 'shared/assets/icons/anime-away-face.svg';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile';
import classes from './Avatar.module.scss';

export enum AvatarTheme {
  CLEAR = 'clear',
}

export enum AvatarSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
  XXL = 'size_xxl',
}

export enum AvatarRadius {
  SQUARE = 'radius_square',
  CIRCLE = 'radius_circle',
  ELLIPSE = 'radius_ellipse',
}

interface AvatarProps {
  className?: string;
  theme?: AvatarTheme;
  size?: AvatarSize;
  radius?: AvatarRadius;
}

export const Avatar = (props: AvatarProps) => {
  const {
    className,
    theme = AvatarTheme.CLEAR,
    size = AvatarSize.L,
    radius = AvatarRadius.CIRCLE,
    ...otherProps
  } = props;

  const data = useSelector(getProfileData);

  const blockMods: Mods = {
    [classes[theme]]: true,
    [classes[size]]: false,
    [classes[radius]]: true,
  };

  const svgMods: Mods = {
    [classes[theme]]: true,
    [classes[size]]: true,
  };

  return (
      <div className={classNames(
        classes.Avatar,
        blockMods,
        [className],
      )}
      >
          {data?.avatar
            ? (
                <img
                    src={data?.avatar}
                    alt={data?.username}
                    className={classNames(
                      classes.userAvatar,
                      svgMods,
                      [className],
                    )}
                />
            )
            : (
                <DefaultAvatar className={classNames(
                  classes.DefaultAvatar,
                  svgMods,
                  [className],
                )}
                />
            )}
      </div>
  );
};
