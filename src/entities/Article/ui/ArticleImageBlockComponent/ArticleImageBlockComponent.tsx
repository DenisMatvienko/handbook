/**
 *    ArticleImageBlockComponent-component.
 *      - ArticleImageBlockComponent
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import classes from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string;
}

export const ArticleImageBlockComponent = ({ className }: ArticleImageBlockComponentProps) => {
  const { t } = useTranslation();

  return (
      <div className={classNames(classes.ArticleImageBlockComponent, {}, [className])}>
          <div>
              Text template
          </div>
      </div>
  );
};
