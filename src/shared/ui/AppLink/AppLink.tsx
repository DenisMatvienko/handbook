/**
 *  AppLink component
 *    Allow to add themes for links tag <a>;
 */

import { memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { ProfilePageHeader } from 'pages/ProfilePage';
import {
  ProfileDataItemReadonly,
} from 'entities/Profile/ui/ProfileCard/ProfileDataItemReadonly/ProfileDataItemReadonly';
import classes from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  DARK_TITLE = 'dark-title',
  DARK_TEXT = 'dark-text',
  LIGHT = 'light',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  children?: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
      <Link
          to={to}
          className={classNames(
            classes.AppLink,
            {},
            [className, classes[theme]],
          )}
          {...otherProps}
      >
          {children}
      </Link>
  );
});
