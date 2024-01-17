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
  PRIMARY = 'appLink_primary',
  SECONDARY = 'appLink_secondary',
  DARK_TITLE = 'appLink_dark-title',
  DARK_TEXT = 'appLink_dark-text',
  LIGHT = 'appLink_light',
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
            classes.appLink,
            {},
            [className, classes[theme]],
          )}
          {...otherProps}
      >
          {children}
      </Link>
  );
});
