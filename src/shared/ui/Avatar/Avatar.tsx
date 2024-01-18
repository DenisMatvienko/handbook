/**
 *    Avatar ui-element
 *      - User-avatar may contain size, radius and theme, for using component in any places of pages
 */

import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile';
import DefaultAvatar from '../../assets/icons/anime-away-face.svg';
import classes from './Avatar.module.scss';

export enum AvatarTheme {
  CLEAR = 'avatar_clear',
}

export enum AvatarSize {
  M = 'avatar_size_m',
  L = 'avatar_size_l',
  XL = 'avatar_size_xl',
  XXL = 'avatar_size_xxl',
}

export enum AvatarRadius {
  SQUARE = 'avatar_radius_square',
  CIRCLE = 'avatar_radius_circle',
  ELLIPSE = 'avatar_radius_ellipse',
}

interface AvatarProps {
  className?: string;
  theme?: AvatarTheme;
  size?: AvatarSize;
  radius?: AvatarRadius;
  src?: string;
  alt?: string;
}

export const Avatar = (props: AvatarProps) => {
  const {
    className,
    theme = AvatarTheme.CLEAR,
    size = AvatarSize.L,
    radius = AvatarRadius.CIRCLE,
    src,
    alt,
    ...otherProps
  } = props;

  const blockMods: Mods = {
    [classes[theme]]: true,
    [classes[size]]: true,
    [classes[radius]]: true,
  };

  return (
      <div className={classes.avatar}>
          {src ? (
              <div className={classNames(
                classes.avatar__wrapper,
                blockMods,
              )}
              >
                  <img
                      src={src}
                      alt={alt}
                      className={classes.avatar__img}
                  />
              </div>
          ) : (
              <DefaultAvatar className={classNames(classes.avatar__img, blockMods)} />
          )}
      </div>
  );
};
