/**
 *    ArticleViewSelector.
 *      - Selector for articles view, by buttons;
 *
 *      @param onViewClick
 *          - Closure. Have functions:
 *          1) external function 'onViewClick' - which contain new view of viewing;
 *          2) internal function 'onClick' - which added as event listener into onClick;
 */

import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { ArticleView } from 'entities/Article';
import ListIcon from 'shared/assets/icons/articlePage/list.svg';
import GridIcon from 'shared/assets/icons/articlePage/grid-aspect-ratio.svg';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import { Button, ButtonRadius, ButtonTheme } from 'shared/ui/Button/Button';
import { uid } from 'shared/lib/uid/uid';
import classes from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.GRID,
    icon: GridIcon,
  },
  {
    view: ArticleView.LIST,
    icon: ListIcon,
  },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { className, view, onViewClick } = props;
  const { t } = useTranslation();

  const onClick = (newView: ArticleView) => () => onViewClick?.(newView);

  return (
      <div className={classNames(classes.articleViewSelector, {}, [className])}>
          {viewTypes.map((item) => (
              <Button
                  key={uid()}
                  className={classes.ArticleViewSelectorButton}
                  theme={ButtonTheme.BACKGROUND_BLOCK}
                  radius={ButtonRadius.SEMI_ELLIPSE}
                  onClick={onClick(item.view)}
              >
                  <Icon
                      className={
                      classNames(
                        classes.articleViewSelector__icon,
                        { [classes.articleViewSelector_viewSwitcher]: item.view === view },
                        [],
                      )
}
                      Svg={item.icon}
                      theme={IconTheme.BLOCK_ICON}
                  />
              </Button>
          ))}
      </div>
  );
});
