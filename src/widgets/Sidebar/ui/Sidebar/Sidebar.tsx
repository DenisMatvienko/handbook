/**
 *  Sidebar - widget
 *
 *  @param SidebarItem
 *    - Component in which loop SidebarItemsList items
 */

import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, {
  memo, useCallback, useEffect, useMemo, useRef, useState,
} from 'react';

import { LangSwitcher } from 'widgets/LangSwitcher';
import {
  Button, ButtonRadius, ButtonSize, ButtonTheme,
} from 'shared/ui/Button/Button';

import Cursor from 'shared/assets/icons/cursor-rays.svg';
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem';
import { useSelector } from 'react-redux';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import LogoIcon from 'shared/assets/logo/logo5.svg';
import { getSidebarItems } from '../../models/selectors/getSidebarItems';
import classes from './Sidebar.module.scss';

export enum SidebarPosition {
    OFF = 'sidebar_off',
    COLLAPSED = 'sidebar_collapsed',
    ON = 'sidebar_on',
}

interface SidebarProps {
  className?: string;
  startedPosition?: SidebarPosition;
}

export const Sidebar = memo((props: SidebarProps) => {
  const {
    className,
    startedPosition = SidebarPosition.OFF,
  } = props;
  const SidebarItemsList = useSelector(getSidebarItems);
  const [newPosition, setNewPosition] = useState(startedPosition);

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
        setNewPosition(SidebarPosition.COLLAPSED);
    }
  }, [newPosition]);

  const mods: Mods = {
    [classes.sidebar_onBlure]: newPosition === SidebarPosition.ON,
  };

  const itemsList = useMemo(() => SidebarItemsList.map((item) => (
      <SidebarItem
          item={item}
          collapsed={newPosition === SidebarPosition.COLLAPSED}
          key={item.path}
      />
  )), [SidebarItemsList, newPosition]);

  return (
      <aside className={classes.sidebar}>
          <Button
              data-testid="sidebar-toggle"
              className={classNames(classes.sidebar__button, {}, [])}
              onClick={onToggle}
              theme={ButtonTheme.CLEAR}
              square
              size={ButtonSize.XXL}
              radius={ButtonRadius.CIRCLE}
          >
              <Icon
                  className={classes.sidebar__cursorIcon}
                  Svg={Cursor}
                  theme={IconTheme.BLOCK_ICON}
              />
          </Button>
          <div className={classes.sidebar__logo}>
              <Icon
                  className={classes.sidebar__logoIcon}
                  Svg={LogoIcon}
                  theme={IconTheme.BLOCK_ICON}
              />
              <div className={classes.sidebar__plank} />
          </div>
          <div
              data-testid="sidebar"
              className={classNames(
                classes.sidebar__aside,
                mods,
                [classes[newPosition]],
              )}
          >
              <div className={classNames(classes.sidebar__items)}>
                  {itemsList}
              </div>
              <LangSwitcher
                  short={newPosition === SidebarPosition.COLLAPSED}
                  className={classes.sidebar__langSwitcher}
              />
          </div>
      </aside>
  );
});
