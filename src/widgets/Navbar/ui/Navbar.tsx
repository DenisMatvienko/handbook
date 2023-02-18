import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import classes from './Navbar.module.scss';

interface NavbarProps {
    // interface describes props for args to Navbar component
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  return (
      <div className={classNames(classes.Navbar, {}, [className])}>
          <div className={classes.links}>
              <AppLink
                  theme={AppLinkTheme.WHITE}
                  className={classes.mainLink}
                  to="/"
              >
                  {t('Главная')}
              </AppLink>
              <AppLink
                  theme={AppLinkTheme.WHITE}
                  to="/about"
              >
                  {t('О сайте')}
              </AppLink>
          </div>
      </div>
  );
};

export default Navbar;
