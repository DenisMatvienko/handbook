import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import {
  Button, ButtonRadius, ButtonSize, ButtonTheme,
} from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import BarsIcon from 'shared/assets/icons/bars-Yt.svg';
import MainPageIcon from 'shared/assets/icons/home-internet.svg';
import AboutPageIcon from 'shared/assets/icons/about-description-help.svg';
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
              <AppLink
                  theme={AppLinkTheme.WHITE}
                  className={classNames(classes.item)}
                  to={RoutePath.main}
              >
                  <MainPageIcon className={classNames(classes.icon)} />
                  <span className={classNames(classes.link)}>{t('Главная')}</span>
              </AppLink>
              <AppLink
                  theme={AppLinkTheme.WHITE}
                  className={classNames(classes.item)}
                  to={RoutePath.about}
              >
                  <AboutPageIcon className={classNames(classes.icon)} />
                  <span className={classNames(classes.link)}>{t('О сайте')}</span>
              </AppLink>
          </div>
          <div className={classes.sidebarWrapper}>
              <div className={classNames(classes.switchers, {}, [])}>
                  <ThemeSwitcher />
                  <LangSwitcher short={collapsed} className={classes.lang} />
              </div>
          </div>
      </div>
  );
};
