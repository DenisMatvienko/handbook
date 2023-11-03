import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { SidebarItemType } from 'widgets/Sidebar/models/types/sidebar';
import classes from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = (props: SidebarItemProps) => {
  const {
    item,
    collapsed,
  } = props;
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
      <AppLink
          theme={AppLinkTheme.LIGHT}
          className={classNames(classes.item, { [classes.collapsed]: collapsed })}
          to={item.path}
      >
          <item.Icon className={classNames(classes.icon)} />
          <span
              className={classNames(classes.link, { [classes.collapsed]: collapsed })}
          >
              {t(item.text)}
          </span>
      </AppLink>
  );
};
