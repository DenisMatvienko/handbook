/**
 *  Sidebar - widget
 *
 *  @param SidebarItem
 *    - Component in which loop SidebarItemsList items
 */

import { classNames } from 'shared/lib/classNames/classNames';
import {
  memo, useEffect, useMemo, useRef, useState,
} from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import {
  Button, ButtonRadius, ButtonSize, ButtonTheme,
} from 'shared/ui/Button/Button';

import BarsIcon from 'shared/assets/icons/bars-Yt.svg';
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../models/selectors/getSidebarItems';
import classes from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(true);
  const SidebarItemsList = useSelector(getSidebarItems);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const itemsList = useMemo(() => SidebarItemsList.map((item) => (
      <SidebarItem
          item={item}
          collapsed={collapsed}
          key={item.path}
      />
  )), [SidebarItemsList, collapsed]);

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
