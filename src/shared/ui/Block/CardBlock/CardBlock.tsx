/**
 *    CardBlock-component.
 *      - Frame for cards, with bgc and shapes
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, ReactNode } from 'react';
import classes from './CardBlock.module.scss';

interface CardBlockProps {
    className?: string;
    children?: ReactNode;
}

export const CardBlock = memo((props: CardBlockProps) => {
  const { className, children } = props;
  const { t } = useTranslation();

  return (
      <div className={classNames(classes.CardBlock, {}, [className])}>
          {children}
      </div>
  );
});
