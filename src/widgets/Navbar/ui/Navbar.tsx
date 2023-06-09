import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonRadius, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import classes from './Navbar.module.scss';

interface NavbarProps {
    // interface describes props for args to Navbar component
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  return (
      <div className={classNames(classes.Navbar, {}, [className])}>
          <Button
              theme={ButtonTheme.BACKGROUND_INVERTED}
              radius={ButtonRadius.SEMI_ELLIPSE}
              className={classes.links}
              onClick={onShowModal}
          >
              {t('Войти')}
          </Button>
          <LoginModal
              isOpen={isAuthModal}
              onClose={onCloseModal}
          />
      </div>
  );
};

export default Navbar;
