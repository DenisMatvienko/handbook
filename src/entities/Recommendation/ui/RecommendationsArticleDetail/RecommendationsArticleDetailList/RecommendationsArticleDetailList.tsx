/**
 *    RecommendationsArticleDetailList-component.
 *      - RecommendationsArticleDetailList
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
import { FullPageBlock } from 'shared/ui/Block/FullPageBlock/FullPageBlock';
import { Skeleton } from 'shared/ui/Skeleton/SkeletonDefault/Skeleton';
import {
  RecommendationsArticleDetailItem,
} from 'entities/Recommendation/ui/RecommendationsArticleDetail/RecommendationsArticleDetailItem/RecommendationsArticleDetailItem';
import { ArticleView } from 'entities/Article';
import { SkeletonArticleListItem } from 'shared/ui/Skeleton/SkeletonArticleListItem/SkeletonArticleListItem';
import classes from './RecommendationsArticleDetailList.module.scss';

interface RecommendationsArticleDetailListProps {
    className?: string;
    recommendations: Recommendation[];
    isLoading?: boolean;
    error?: string;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = () => new Array(3)
  .fill(0).map(() => (
      <Skeleton
          border={5}
          width="100%"
          height={120}
      />
  ));

export const RecommendationsArticleDetailList = memo((props: RecommendationsArticleDetailListProps) => {
  const {
    className,
    recommendations,
    isLoading,
    target,
    error,
  } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
        <div
            className={classes.RecommendationsArticleDetailList__isLoading}
        >
            {getSkeletons()}
        </div>
    );
  }

  return (
      <div className={classNames(classes.RecommendationsArticleDetailList, {}, [className])}>
          {recommendations.map((item) => (
              <RecommendationsArticleDetailItem
                  target={target}
                  recommendation={item}
              />
          ))}
      </div>
  );
});
