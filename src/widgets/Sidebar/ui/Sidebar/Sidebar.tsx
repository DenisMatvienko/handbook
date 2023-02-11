import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import classes from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    // prev => !prev - invert prev, is - previous value
    setCollapsed((prev) => !prev);
  };

  return (
  // [classes.collapsed]: - if true add collapsed
      <div className={classNames(
        classes.Sidebar,
        { [classes.collapsed]: collapsed },
        [className],
      )}
      >
          <div className={classes.sidebarWrapper}>
              <button
                  type="button"
                  className={classNames(classes.button, {}, [])}
                  onClick={onToggle}
              >
                  toggle
              </button>
              <div className={classes.switchers}>
                  <ThemeSwitcher />
                  <LangSwitcher className={classes.lang} />
              </div>
          </div>
      </div>
  );
};
