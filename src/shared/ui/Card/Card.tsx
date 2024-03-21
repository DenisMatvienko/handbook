/**
 *    Card of product.
 *      - Card component render in articleList
 */

import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { HTMLAttributes, memo, ReactNode } from 'react';
import { FullPageBlock } from 'shared/ui/Block/FullPageBlock/FullPageBlock';
import classes from './Card.module.scss';

export enum CardView {
    DEFAULT = 'card_view_default',
    ARTICLE = 'card_view_article',
}

export enum CardTheme {
    DEFAULT = 'card_theme_default',
    TABS = 'card_theme_tabs',
    TABS_CHECKED = 'card_theme_tabs_checked',
}

interface CardProps extends HTMLAttributes<HTMLDivElement>{
    className?: string;
    cardTheme?: CardTheme;
    cardView?: CardView;
    children: ReactNode;
}

export const Card = memo((props: CardProps) => {
  const {
    className,
    cardTheme = CardTheme.DEFAULT,
    cardView = CardView.DEFAULT,
    children,
    ...otherProps
  } = props;
  const { t } = useTranslation();

  const mods: Mods = {
    [classes[cardTheme]]: true,
    [classes[cardView]]: true,
  };

  if (CardView.ARTICLE) {
    return (
        <div
            className={classNames(classes.card, {}, [className])}
        >
            <FullPageBlock className={classNames(classes.card__item, mods, [])}>
                {children}
            </FullPageBlock>
        </div>
    );
  }

  return (
      <div
          className={classNames(classes.card, {}, [className])}
      >
          <div className={classNames(classes.card__item, mods, [])}>
              {children}
          </div>
      </div>
  );
});
