/**
 *    Card of product.
 *      - Card component render in articleList
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { HTMLAttributes, memo, ReactNode } from 'react';
import { FullPageBlock } from 'shared/ui/Block/FullPageBlock/FullPageBlock';
import classes from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement>{
    className?: string;
    children: ReactNode;
}

export const Card = memo((props: CardProps) => {
  const { className, children, ...otherProps } = props;
  const { t } = useTranslation();

  return (
      <div
          className={classNames(classes.card, {}, [className])}
          {...otherProps}
      >
          <FullPageBlock className={classes.card__item}>
              {children}
          </FullPageBlock>
      </div>
  );
});
