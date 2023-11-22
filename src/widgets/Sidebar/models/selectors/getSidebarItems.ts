/**
 *      getSidebarItems - selector
 *          - Memoize selector;
 *          If user is auth, sidebar items added 2 routes: profile and articles
 *
 *      @param createSelector;
 *          - Is reselect. For memoize properties which get from state;
 *            Cause that properties didn't change more often;
 *
 *       Type of sidebar items
 *
 *      @param path;
 *          - path of route;
 *
 *       @param text;
 *          - name of sidebar properties;
 *
 *       @param icon;
 *          - svg icon of property, type get from svg icon (ctrl + hover on svg component);
 */
import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainPageIcon from 'shared/assets/icons/home-internet.svg';
import ArticlesPageIcon from 'shared/assets/icons/notes-multiple.svg';
import ProfilePageIcon from 'shared/assets/icons/profile.svg';
import AboutPageIcon from 'shared/assets/icons/about-description-help.svg';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: RoutePath.main,
        text: 'Main',
        Icon: MainPageIcon,
      },
      {
        path: RoutePath.about,
        text: 'About',
        Icon: AboutPageIcon,
      },
    ];

    if (userData) {
      sidebarItemsList.push(
        {
          path: RoutePath.articles,
          text: 'Articles',
          Icon: ArticlesPageIcon,
          authOnly: true,
        },
        {
          path: RoutePath.profile + userData.id,
          text: 'Profile',
          Icon: ProfilePageIcon,
          authOnly: true,
        },
      );
    }

    return sidebarItemsList;
  },
);
