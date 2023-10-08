/**
 * Type of sidebar items
 *  @param path
 *  - path of route
 *  @param text
 *  - name of sidebar properties
 *  @param icon
 *  - svg icon of property, type get from svg icon (ctrl + hover on svg component)
 */

import React from 'react';
import MainPageIcon from 'shared/assets/icons/home-internet.svg';
import AboutPageIcon from 'shared/assets/icons/about-description-help.svg';
import ProfilePageIcon from 'shared/assets/icons/profile.svg';
import ArticlesPageIcon from 'shared/assets/icons/notes-multiple.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    text: 'Main',
    Icon: MainPageIcon,
  },
  {
    path: RoutePath.articles,
    text: 'Articles',
    Icon: ArticlesPageIcon,
    authOnly: true,
  },
  {
    path: RoutePath.profile,
    text: 'Profile',
    Icon: ProfilePageIcon,
    authOnly: true,
  },
  {
    path: RoutePath.about,
    text: 'About',
    Icon: AboutPageIcon,
  },
];
