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
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    text: 'Главная',
    Icon: MainPageIcon,
  },
  {
    path: RoutePath.about,
    text: 'О сайте',
    Icon: AboutPageIcon,
  },
  {
    path: RoutePath.profile,
    text: 'Профиль',
    Icon: ProfilePageIcon,
  },
];
