/**
 *    ArticleDetailsPage-component.
 *      - ArticleDetailsPage
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { createContext, memo } from 'react';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import {
  ArticleRecommendations,
} from 'entities/Article/ui/ArticleRecommendations/ArticleRecommendations';
import { DoubleAdjustableFrame } from 'shared/ui/Block/DoubleAdjustableFrame/DoubleAdjustableFrame';
import classes from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('articles');
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
        <div className={classNames(classes.ArticleDetailsPage, {}, [className])}>
            <div>
                <Text
                    title={t('Oopps...')}
                    theme={TextTheme.BACKGROUND_TEXT}
                    align={TextAlign.LEFT}
                />
                <Text
                    theme={TextTheme.BACKGROUND_TEXT}
                    text={t('Article not found')}
                    align={TextAlign.LEFT}
                />
            </div>
        </div>
    );
  }

  return (

      <div className={classNames(classes.ArticleDetailsPage, {}, [className])}>
          <DoubleAdjustableFrame
              widthLeftBlock="69%"
              widthRightBlock="30%"
              rightBlock={<ArticleRecommendations id={id} />}
          >
              <ArticleDetails id={id} />
          </DoubleAdjustableFrame>
      </div>
  );
};

export default memo(ArticleDetailsPage);
