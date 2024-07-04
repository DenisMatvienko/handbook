/**
 *    RecommendationsArticleItemMain-component.
 *      - RecommendationsArticleItemMain
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { Recommendation } from 'entities/Recommendation/model/types/recommendation';
import {
  Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { uid } from 'shared/lib/uid/uid';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import EyeIcon from 'shared/assets/icons/eye-show.svg';
import { Icon } from 'shared/ui/Icon/Icon';
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

  if (!recommendation) {
    return null;
  }

  return (
      <div
          className={classes.RecommendationsArticleItemMain}
      >
          <div
              className={classNames(classes.RecommendationsArticleItemMain__item, {}, [className])}
          >
              <AppLink
                  className={classes.RecommendationsArticleItemMain__link}
                  to={`${RoutePath.article_details}${recommendation?.article?.id}`}
              >
                  <Text
                      className={classes.RecommendationsArticleItemMain__title}
                      key={uid()}
                      theme={TextTheme.BLOCK_TEXT}
                      title={`${recommendation?.article?.title}`}
                      size={TextSize.M}
                      align={TextAlign.LEFT}
                  />
              </AppLink>
              <div className={classes.RecommendationsArticleItemMain__itemInfo}>
                  <div className={classes.RecommendationsArticleItemMain__itemInfoWrapper}>
                      <Icon
                          className={classes.RecommendationsArticleItemMain__userIcon}
                          Svg={ProfileIcon}
                      />
                      <AppLink
                          className={classes.RecommendationsArticleItemMain__profileLink}
                          to={`${RoutePath.profile}${recommendation?.user?.id}`}
                      >
                          <Text
                              key={uid()}
                              theme={TextTheme.SUBTITLE}
                              text={`${recommendation?.user?.username}`}
                              size={TextSize.S}
                              align={TextAlign.LEFT}
                          />
                      </AppLink>
                  </div>
                  <div className={classes.RecommendationsArticleItemMain__itemInfoWrapper}>
                      <Icon
                          className={classes.RecommendationsArticleItemMain__viewsIcon}
                          Svg={EyeIcon}
                      />
                      <Text
                          key={uid()}
                          theme={TextTheme.SUBTITLE}
                          text={`${recommendation?.views}`}
                          size={TextSize.S}
                          align={TextAlign.LEFT}
                      />
                  </div>
              </div>
          </div>
      </div>
  );
});
