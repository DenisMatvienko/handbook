/**
 *  Half-page block
 *    - Block which to take place half of page area
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ReactNode } from 'react';
import classes from './HalfPageBlock.module.scss';

interface HalfPageBlockProps {
  className?: string,
  children: ReactNode,
}

export const HalfPageBlock = ({
  className,
  children,
}: HalfPageBlockProps) => {
  const { t } = useTranslation();

  return (
      <div className={classNames(classes.halfPageBlock)}>
          {children}
      </div>
  );
};
