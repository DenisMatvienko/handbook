/**
 *    RecommendationsArticleDetailItem-component.
 *      - RecommendationsArticleDetailItem
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { HTMLAttributeAnchorTarget, memo } from 'react';
import { Recommendation } from 'entities/Recommendation/model/types/recommendation';
import { Avatar, AvatarRadius, AvatarSize } from 'shared/ui/Avatar/Avatar';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import {
  Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { uid } from 'shared/lib/uid/uid';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-show.svg';
import { Tag, TagTheme } from 'shared/ui/Tag/Tag';
import classes from './RecommendationsArticleDetailItem.module.scss';

interface RecommendationsArticleDetailItemProps {
    className?: string;
    recommendation?: Recommendation;
    target?: HTMLAttributeAnchorTarget;
}

export const RecommendationsArticleDetailItem = memo((props: RecommendationsArticleDetailItemProps) => {
  const {
    className,
    recommendation,
    target,
  } = props;
  const { t } = useTranslation();

  if (!recommendation) {
    return null;
  }

  return (
      <div className={classNames(classes.RecommendationsArticleDetailItem, {}, [className])}>
          <div
              className={classes.RecommendationsArticleDetailItem__block}
              key={recommendation.id}
          >
              <div
                  className={classes.RecommendationsArticleDetailItem__recommendationsDetailHeader}
              >
                  <Avatar
                      size={AvatarSize.M}
                      radius={AvatarRadius.ELLIPSE}
                      src={recommendation.user.avatar}
                      alt={recommendation.user.avatar}
                  />
                  <AppLink
                      target={target}
                      className={classes.RecommendationsArticleDetailItem__linkToProfile}
                      to={`${RoutePath.profile}${recommendation?.user?.id}`}
                  >
                      <Text
                          key={uid()}
                          theme={TextTheme.BLOCK_TEXT}
                          text={`${recommendation?.user?.username}`}
                          size={TextSize.M}
                          align={TextAlign.LEFT}
                      />
                  </AppLink>
                  <Text
                      key={uid()}
                      theme={TextTheme.SUBTITLE}
                      text={`${recommendation?.article?.createdAt}`}
                      size={TextSize.S}
                      align={TextAlign.LEFT}
                  />
              </div>
              <AppLink
                  target={target}
                  className={classes.RecommendationsArticleDetailItem__linkToArticle}
                  to={`${RoutePath.article_details}${recommendation?.article?.id}`}
              >
                  <Text
                      key={uid()}
                      theme={TextTheme.BLOCK_TEXT}
                      title={`${recommendation?.article?.title}`}
                      size={TextSize.M}
                      align={TextAlign.LEFT}
                  />
              </AppLink>
              <div className={classes.RecommendationsArticleDetailItem__itemInfoWrapper}>
                  <Icon
                      className={classes.RecommendationsArticleDetailItem__viewsIcon}
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
              <div
                  className={classes.RecommendationsArticleDetailItem__Tags}
              >
                  {recommendation?.article?.type.slice(0, 5).map((item) => (
                      <Tag
                          className={classes.RecommendationsArticleDetailItem__Tag}
                          key={uid()}
                          theme={TagTheme.DEFAULT}
                          data={item}
                      />
                  ))}
              </div>
          </div>
      </div>
  );
});
