/**
 *    ArticleDetailsContent-component.
 *      - ArticleDetailsContent
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import classes from './ArticleDetailsContent.module.scss';

interface ArticleDetailsContentProps {
  className?: string;
}

export const ArticleDetailsContent = memo(({ className }: ArticleDetailsContentProps) => {
  const { t } = useTranslation();

  return (
      <div className={classNames(classes.ArticleDetailsContent, {}, [className])}>
          <div>
              Text template
          </div>
      </div>
  );
});
