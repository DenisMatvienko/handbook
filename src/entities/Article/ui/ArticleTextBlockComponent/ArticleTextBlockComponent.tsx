/**
 *    ArticleTextBlockComponent-component.
 *      - ArticleTextBlockComponent
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import classes from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
  className?: string;
}

export const ArticleTextBlockComponent = ({ className }: ArticleTextBlockComponentProps) => {
  const { t } = useTranslation();

  return (
      <div className={classNames(classes.ArticleTextBlockComponent, {}, [className])}>
          <div>
              Text template
          </div>
      </div>
  );
};
