import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from 'widgets/Sidebar/models/items';
import classes from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = ({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();

  return (
      <AppLink
          theme={AppLinkTheme.WHITE}
          className={classNames(classes.item, { [classes.collapsed]: collapsed })}
          to={item.path}
      >
          <item.Icon className={classNames(classes.icon)} />
          <span className={classNames(classes.link, { [classes.collapsed]: collapsed })}>{t(item.text)}</span>
      </AppLink>
  );
};
