/**
 *    ArticleCodeBlockComponent-component.
 *      - ArticleCodeBlockComponent
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import classes from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
  className?: string;
}

export const ArticleCodeBlockComponent = memo(({ className }: ArticleCodeBlockComponentProps) => {
  const { t } = useTranslation();

  return (
      <div className={classNames(classes.ArticleCodeBlockComponent, {}, [className])}>
          <div>
              Code block
          </div>
      </div>
  );
});
