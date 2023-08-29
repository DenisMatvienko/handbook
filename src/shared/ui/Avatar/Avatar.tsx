/**
 *  - Avatar ui-element
 */

import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile';
import DefaultAvatar from '../../assets/icons/anime-away-face.svg';
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
      <div className={classes.Avatar}>
          {src ? (
              <div className={classNames(
                classes.avatarWrap,
                blockMods,
              )}
              >
                  <img
                      src={src}
                      alt={alt}
                      className={classes.avatarUser}
                  />
              </div>
          ) : (
              <DefaultAvatar className={classNames(classes.avatarUser, blockMods)} />
          )}
      </div>
  );
};
