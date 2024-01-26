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
  ReactNode, useState, useRef, useEffect, useCallback, MutableRefObject,
} from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/provider/ThemeProvider';
import classes from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 0;

export const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    isOpen,
    onClose,
    lazy,
  } = props;

  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef() as MutableRefObject<ReturnType< typeof setTimeout>>;
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

  if (lazy && !isMounted) {
    return null;
  }

  return (
      <Portal>
          <div className={classNames(classes.modal, mods, [className, theme])}>
              <div className={classes.modal__overlay} onClick={closeHandler}>
                  <div
                      className={classes.modal__content}
                      onClick={onContentClick}
                  >
                      {children}
                  </div>
              </div>
          </div>
      </Portal>
  );
};
