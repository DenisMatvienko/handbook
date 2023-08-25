/**
 *  Sidebar - widget
 *
 *  @param SidebarItem - redirect
 *    - need update
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import {
  Button, ButtonRadius, ButtonSize, ButtonTheme,
} from 'shared/ui/Button/Button';

import BarsIcon from 'shared/assets/icons/bars-Yt.svg';
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem';
import { SidebarItemsList } from 'widgets/Sidebar/models/items';
import { useSelector } from 'react-redux';
import { getProfileReadonly } from 'entities/Profile';
import classes from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(true);
  const readonly = useSelector(getProfileReadonly);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const itemsList = useMemo(() => SidebarItemsList.map((item) => (
      <SidebarItem
          item={item}
          collapsed={collapsed}
          key={item.path}
      />
  )), [collapsed]);

  return (
      <div
          data-testid="sidebar"
          className={classNames(
            classes.Sidebar,
            { [classes.collapsed]: collapsed },
            [className],
          )}
      >
          <Button
              data-testid="sidebar-toggle"
              className={classNames(classes.button, {}, [])}
              onClick={onToggle}
              theme={ButtonTheme.CLEAR}
              square
              size={ButtonSize.XXL}
              radius={ButtonRadius.CIRCLE}
          >
              <BarsIcon className={classNames(
                classes.BarsIcon,
                {},
                [],
              )}
              />
          </Button>
          <div className={classNames(classes.items)}>
              {itemsList}
          </div>
          <div className={classes.sidebarWrapper}>
              <div className={classNames(classes.switchers, {}, [])}>
                  <ThemeSwitcher />
                  <LangSwitcher short={collapsed} className={classes.lang} />
              </div>
          </div>
      </div>
  );
});
