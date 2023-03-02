import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonRadius, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import classes from './Navbar.module.scss';

interface NavbarProps {
    // interface describes props for args to Navbar component
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
      <div className={classNames(classes.Navbar, {}, [className])}>
          <Button
              theme={ButtonTheme.BACKGROUND_INVERTED}
              radius={ButtonRadius.SEMI_ELLIPSE}
              className={classes.links}
              onClick={onToggleModal}
          >
              {t('Войти')}
          </Button>
          <Modal isOpen={isAuthModal} onClose={onToggleModal}>
              {t('Lorem-layout')}
          </Modal>
      </div>
  );
};

export default Navbar;
