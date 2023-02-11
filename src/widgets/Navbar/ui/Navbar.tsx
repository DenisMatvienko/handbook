import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import classes from './Navbar.module.scss';

interface NavbarProps {
    // interface describes props for args to Navbar component
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(classes.Navbar, {}, [className])}>
        <div className={classes.links}>
            <AppLink
                theme={AppLinkTheme.SECONDARY}
                className={classes.mainLink}
                to="/"
            >
                Главная
            </AppLink>
            <AppLink
                theme={AppLinkTheme.SECONDARY}
                to="/about"
            >
                О сайте
            </AppLink>
        </div>
    </div>
);

export default Navbar;
