/**
 *    Tabs-component.
 *      - List of items, which one of item is checked;
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, ReactNode } from 'react';
import { Card, CardTheme } from 'shared/ui/Card/Card';
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

  return (
      <div className={classNames(classes.tabs, {}, [className])}>
          {tabs.map((item) => (
              <Card
                  cardTheme={CardTheme.TABS}
              >
                  {item.content}
              </Card>
          ))}
      </div>
  );
});
