/**
 *    RecommendationsArticleItemMain-component.
 *      - RecommendationsArticleItemMain
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Recommendation } from 'entities/Recommendation/model/types/recommendation';
import {
  Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { uid } from 'shared/lib/uid/uid';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Article } from 'entities/Article';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import classes from './RecommendationsArticleItemMain.module.scss';

interface RecommendationsArticleItemMainProps {
  className?: string;
  recommendation?: Recommendation;
}

export const RecommendationsArticleItemMain = memo((props: RecommendationsArticleItemMainProps) => {
  const {
    className,
    recommendation,
  } = props;
  const { t } = useTranslation();
  const navigate = useNavigate();

  if (!recommendation) {
    return null;
  }

  return (
      <AppLink
          className={classes.commentCard__link}
          to={`${RoutePath.article_details}${recommendation?.article?.id}`}
      >
          <div
              className={classNames(classes.RecommendationsArticleItemMain, {}, [className])}
          >
              <Text
                  key={uid()}
                  theme={TextTheme.BLOCK_TEXT}
                  title={`${recommendation?.article?.title}`}
                  size={TextSize.M}
                  align={TextAlign.LEFT}
              />
              <Text
                  key={uid()}
                  theme={TextTheme.SUBTITLE}
                  text={`${recommendation?.user?.username}`}
                  size={TextSize.S}
                  align={TextAlign.LEFT}
              />
              <Text
                  key={uid()}
                  theme={TextTheme.SUBTITLE}
                  text={`${recommendation?.views}`}
                  size={TextSize.S}
                  align={TextAlign.LEFT}
              />
          </div>
      </AppLink>
  );
});
