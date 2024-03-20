/**
 *    Card of product.
 *      - Card component render in articleList
 */

import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { HTMLAttributes, memo, ReactNode } from 'react';
import { FullPageBlock } from 'shared/ui/Block/FullPageBlock/FullPageBlock';
import classes from './Card.module.scss';

export enum CardTheme {
    DEFAULT = 'card_default',
    TABS = 'card_tabs',
    TABS_CHECKED = 'card_tabs_checked',
}

interface CardProps extends HTMLAttributes<HTMLDivElement>{
    className?: string;
    cardTheme?: CardTheme;
    children: ReactNode;
}

export const Card = memo((props: CardProps) => {
  const {
    className,
    cardTheme = CardTheme.DEFAULT,
    children,
    ...otherProps
  } = props;
  const { t } = useTranslation();

  const mods: Mods = {
    [classes[cardTheme]]: true,
  };

  if (CardTheme.DEFAULT) {
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
  }

  return (
      <div
          className={classNames(classes.card, mods, [className])}
          {...otherProps}
      >
          {children}
      </div>
  );
});
