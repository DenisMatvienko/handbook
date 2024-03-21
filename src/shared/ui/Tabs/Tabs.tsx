/**
 *    Tabs-component.
 *      - List of items, which one of item is checked;
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, ReactNode, useCallback } from 'react';
import { Card, CardTheme, CardView } from 'shared/ui/Card/Card';
import classes from './Tabs.module.scss';

interface TabsItem {
    value?: string;
    content?: ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabsItem[];
    value: string;
    onTabClick: (tab: TabsItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
  const {
    className, tabs, value, onTabClick,
  } = props;
  const { t } = useTranslation();

  const clickHandle = useCallback((tab: TabsItem) => () => {
    onTabClick(tab);
  }, [onTabClick]);

  return (
      <div className={classNames(classes.tabs, {}, [className])}>
          {tabs.map((item) => (
              <Card
                  className={classes.tabs__card}
                  cardTheme={item.value === value ? CardTheme.TABS_CHECKED : CardTheme.TABS}
                  cardView={CardView.DEFAULT}
                  onClick={clickHandle(item)}
              >
                  {item.content}
              </Card>
          ))}
      </div>
  );
});
