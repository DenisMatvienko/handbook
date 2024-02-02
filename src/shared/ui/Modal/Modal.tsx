/**
 *  - Modal component
 *  @param setTimeout in closeHandler
 *  - Speed as far is closing animation.
 *    Timeout using in ref because - if we delete modal from DOM, timeout run anyway, and we try
 *    change state of undefined deleted modal component, that mean  - app crash with error
 *
 *
 *  @param useCallback in onKeyDown
 *  - useCallback memorize every time this function.
 *    Because without useCallback, after each render create new this function
 *    And each of this new functions has new links
 *
 *  We use lazy loading of the modal because it is rendered first because of the portal
 *  With 'lazy' is true and !isMounted we are didn't mount modal in DOM
 *  2 arguments to use 'lazy':
 *  - component didn't render while modal will mount
 *  - autofocus will work in input when modal will open and mount
 *
 *  @error Common mistake's
 *    - clearTimout cannot get null. But cause isOpen can be undefined. In ReturnType of timerRef
 *      was added 'typeof setTimeout | null'. That get mistake with clearTimout.
 *      Solving: add timerRef as MutableRefObject
 *
 */

import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, {
  MutableRefObject, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/provider/ThemeProvider';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import EscIcon from 'shared/assets/icons/search/key-esc.svg';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import classes from './Modal.module.scss';

export enum ModalTheme {
    DEFAULT = 'modal_default',
    NAVBAR_SEARCH = 'modal_navbar-search',
}

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    modalTheme: ModalTheme;
    lazy?: boolean;
}

const ANIMATION_DELAY = 200;

export const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    isOpen,
    onClose,
    modalTheme = ModalTheme.DEFAULT,
    lazy,
  } = props;

  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef() as MutableRefObject<ReturnType< typeof setTimeout>>;
  const { t } = useTranslation('filters');
  const { theme } = useTheme();

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  const mods: Mods = {
    [classes.modal_opened]: isOpen,
    [classes.modal_closed]: isClosing,
  };

  const themeMods: Mods = {
    [classes[modalTheme]]: true,
  };

  if (lazy && !isMounted) {
    return null;
  }

  if (modalTheme === ModalTheme.NAVBAR_SEARCH) {
    return (
        <Portal>
            <div className={classNames(classes.modal, mods, [className, theme])}>
                <div className={classes.modal__overlay} onClick={closeHandler}>
                    <div className={
                      classNames(
                        classes.modal__contentWrapper,
                        {},
                        [classes.modal__disappearance],
                      )
}
                    >
                        <div
                            className={classNames(classes.modal__content, themeMods, [theme])}
                            onClick={onContentClick}
                        >
                            {children}
                        </div>
                        <div
                            className={classes.modal__bottom}
                        >
                            <Icon
                                className={classes.modal__escIcon}
                                Svg={EscIcon}
                                theme={IconTheme.BLOCK_ICON}
                            />
                            <Text
                                text={t('to close')}
                                theme={TextTheme.SUBTITLE}
                                size={TextSize.M}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Portal>
    );
  }

  return (
      <Portal>
          <div className={
            classNames(
              classes.modal,
              mods,
              [className, theme],
            )
}
          >
              <div className={classes.modal__overlay} onClick={closeHandler}>
                  <div
                      className={
                    classNames(
                      classes.modal__contentDefault,
                      themeMods,
                      [theme, classes.modal__disappearance],
                    )
}
                      onClick={onContentClick}
                  >
                      {children}
                  </div>
              </div>
          </div>
      </Portal>
  );
};
