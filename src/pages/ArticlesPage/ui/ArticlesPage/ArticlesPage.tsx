/**
 *    ArticlesPage-component.
 *      - ArticlesPage
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import classes from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const { t } = useTranslation();

  return (
      <div className={classNames(classes.ArticlesPage, {}, [className])}>
          <div>
              <Text
                  title={t('Articles page')}
                  theme={TextTheme.BACKGROUND_TEXT}
                  align={TextAlign.LEFT}
              />
              <Text
                  theme={TextTheme.BACKGROUND_TEXT}
                  text={t('Will be Articles')}
                  align={TextAlign.LEFT}
              />
          </div>
      </div>
  );
};

export default memo(ArticlesPage);
