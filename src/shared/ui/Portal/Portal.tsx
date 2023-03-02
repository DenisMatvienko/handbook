import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode; // Children teleporting in element
    element?: HTMLElement; // Container. Element teleporting where
}

export const Portal = (props: PortalProps) => {
  const {
    children,
    element = document.body,
  } = props;
  return createPortal(children, element);
};
