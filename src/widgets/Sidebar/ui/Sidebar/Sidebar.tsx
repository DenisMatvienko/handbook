/**
 *  Sidebar - widget
 *
 *  @param SidebarItem
 *    - Component in which loop SidebarItemsList items
 */

import { classNames } from 'shared/lib/classNames/classNames';
import {
  memo, useCallback, useEffect, useMemo, useRef, useState,
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

export enum SidebarPosition {
    OFF = 'off',
    COLLAPSED = 'collapsed',
    ON = 'on',
}

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(true);
  const SidebarItemsList = useSelector(getSidebarItems);
  const [newPosition, setNewPosition] = useState(SidebarPosition.OFF);

  const onToggle = useCallback(() => {
    switch (newPosition) {
      case SidebarPosition.OFF:
        setNewPosition(SidebarPosition.COLLAPSED);
        break;
      case SidebarPosition.COLLAPSED:
        setNewPosition(SidebarPosition.ON);
        break;
      case SidebarPosition.ON:
        setNewPosition(SidebarPosition.OFF);
        break;
      default:
        setNewPosition(SidebarPosition.OFF);
    }
  }, [newPosition]);

  const itemsList = useMemo(() => SidebarItemsList.map((item) => (
      <SidebarItem
          item={item}
          collapsed={collapsed}
          key={item.path}
      />
  )), [SidebarItemsList, collapsed]);

  return (
      <div className={classes.wrapper}>
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
          <aside
              data-testid="sidebar"
              className={classNames(
                classes.Sidebar,
                {},
                [classes[newPosition]],
              )}
          >
              <div className={classNames(classes.items)}>
                  {itemsList}
              </div>
              <div className={classes.sidebarWrapper}>
                  <div className={classNames(classes.switchers, {}, [])}>
                      <ThemeSwitcher />
                      <LangSwitcher short={collapsed} className={classes.lang} />
                  </div>
              </div>
          </aside>
      </div>
  );
});
