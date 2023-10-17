/**
 *    ArticleDetailsPage-component.
 *      - ArticleDetailsPage
 *
 *    @param DoubleAdjustableFrame;
 *      - Wrap 2 blocks bt left side and by right side of page. Allow to add width for both blocks.
 *
 *    @param componentsLeftSide;
 *      - Object with components which participate in left side of DoubleAdjustableFrame
 *
 *    @param componentRightSide;
 *      - Object with components which participate in right side of DoubleAdjustableFrame
 *
 *    @param ArticleDetails;
 *      - Main article content, should to take most of the place. By default, width - 69%.
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { ArticleRecommendations } from 'entities/Article/ui/ArticleRecommendations/ArticleRecommendations';
import {
  ComponentsObjectType,
  DoubleAdjustableFrame,
} from 'shared/ui/Block/DoubleAdjustableFrame/DoubleAdjustableFrame';
import { CommentList } from 'entities/Comment';
import classes from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('articles');
  const { id } = useParams<{ id: string }>();

  const componentsLeftSide: ComponentsObjectType = {
    articleContent: <ArticleDetails id={id || '0'} />,
    comments: <CommentList
        marginTop
        comments={[]}
    />,
  };

  const componentsRightSide: ComponentsObjectType = {
    recommendations: <ArticleRecommendations id={id || '0'} />,
  };

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
              leftBlock={componentsLeftSide}
              rightBlock={componentsRightSide}
          />
      </div>
  );
};

export default memo(ArticleDetailsPage);
