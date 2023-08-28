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
}

export const Avatar = (props: AvatarProps) => {
  const {
    className,
    theme = AvatarTheme.CLEAR,
    size = AvatarSize.L,
    radius = AvatarRadius.CIRCLE,
    src,
    ...otherProps
  } = props;

  const data = useSelector(getProfileData);

  const blockMods: Mods = {
    [classes[theme]]: true,
    [classes[size]]: true,
    [classes[radius]]: true,
  };

  if (!data?.avatar) {
    return (
        <DefaultAvatar className={classNames(classes.avatarUser, blockMods)} />
    );
  }

  return (
      <div className={classes.Avatar}>
          <div className={classNames(
            classes.avatarWrap,
            blockMods,
          )}
          >
              <img
                  src={!src ? data?.avatar : src}
                  alt={data?.username}
                  className={classes.avatarUser}
              />
          </div>
      </div>
  );
};
