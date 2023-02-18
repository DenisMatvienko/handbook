import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import classes from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    // prev => !prev - invert prev, is - previous value
    setCollapsed((prev) => !prev);
  };

  return (
  // [classes.collapsed]: - if true add collapsed
      <div
          data-testid="sidebar"
          className={classNames(
            classes.Sidebar,
            { [classes.collapsed]: collapsed },
            [className],
          )}
      >
          <div className={classes.sidebarWrapper}>
              <Button
                  data-testid="sidebar-toggle"
                  className={classNames(classes.button, {}, [])}
                  onClick={onToggle}
              >
                  {t('Меню')}
              </Button>
              <div className={classes.switchers}>
                  <ThemeSwitcher />
                  <LangSwitcher className={classes.lang} />
              </div>
          </div>
      </div>
  );
};
