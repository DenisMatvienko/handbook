/**
 *    ArticleDetailsPage-component.
 *      - ArticleDetailsPage
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import classes from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('articles');

  return (
      <div className={classNames(classes.ArticleDetailsPage, {}, [className])}>
          <div>
              <Text
                  title={t('Articles Detail page')}
                  theme={TextTheme.BACKGROUND_TEXT}
                  align={TextAlign.LEFT}
              />
              <Text
                  theme={TextTheme.BACKGROUND_TEXT}
                  text={t('Will be Articles Detail')}
                  align={TextAlign.LEFT}
              />
          </div>
      </div>
  );
};

export default memo(ArticleDetailsPage);
