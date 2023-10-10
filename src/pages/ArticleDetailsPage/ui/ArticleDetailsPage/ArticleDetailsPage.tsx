/**
 *    ArticleDetailsPage-component.
 *      - ArticleDetailsPage
 *
 *    @param DoubleAdjustableFrame;
 *      - Wrap 2 blocks ArticleRecommendations and ArticleDetails. Allow to add width for both
 *        blocks.
 *
 *    @param ArticleDetails;
 *      - Main article content, should to take most of the place. By default, width - 69%.
 *
 *    @param ArticleRecommendations;
 *      - Article list for, stories and other content in right pallet block for navigation
 *        on article page.
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
import { CommentList } from 'entities/Comment';
import classes from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('articles');
  const { id } = useParams<{ id: string }>();
  const comment = [
    {
      id: '1',
      text: 'comment',
      user: { id: '1', username: 'cyberterminator4100' },
    },
  ];

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
              leftBlock={[
                  <ArticleDetails id={id} />,
                  <CommentList marginTop comments={comment} />,
              ]}
              rightBlock={[
                  <ArticleRecommendations id={id} />,
              ]}
          />
      </div>
  );
};

export default memo(ArticleDetailsPage);
