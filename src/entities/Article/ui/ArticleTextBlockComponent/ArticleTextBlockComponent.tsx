/**
 *    ArticleTextBlockComponent-component.
 *      - ArticleTextBlockComponent
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import classes from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
  className?: string;
}

export const ArticleTextBlockComponent = memo(({ className }: ArticleTextBlockComponentProps) => {
  const { t } = useTranslation();

  return (
      <div className={classNames(classes.ArticleTextBlockComponent, {}, [className])}>
          <div>
              Text Block
          </div>
      </div>
  );
});
