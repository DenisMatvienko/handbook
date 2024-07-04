/**
 *    SkeletonRecommendationsArticlesList-component.
 *      - SkeletonRecommendationsArticlesList
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { Skeleton } from 'shared/ui/Skeleton/SkeletonDefault/Skeleton';
import { Icon } from 'shared/ui/Icon/Icon';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import EyeIcon from 'shared/assets/icons/eye-show.svg';
import classes from './SkeletonRecommendationsArticlesList.module.scss';

interface SkeletonRecommendationsArticlesListProps {
    className?: string;
}

export const SkeletonRecommendationsArticlesList = memo((props: SkeletonRecommendationsArticlesListProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
      <div className={classNames(classes.SkeletonRecommendationsArticlesList, {}, [className])}>
          <div
              className={classes.SkeletonRecommendationsArticlesList__title}
          >
              <Skeleton
                  border={5}
                  width="100%"
                  height={32}
              />
          </div>
          <div
              className={classes.SkeletonRecommendationsArticlesList__info}
          >
              <Icon
                  className={classes.SkeletonRecommendationsArticlesList__userIcon}
                  Svg={ProfileIcon}
              />
              <Skeleton
                  className={classes.SkeletonRecommendationsArticlesList__userInfo}
                  border="5%"
                  width={70}
                  height={20}
              />
              <Icon
                  className={classes.SkeletonRecommendationsArticlesList__viewsIcon}
                  Svg={EyeIcon}
              />
              <Skeleton
                  className={classes.SkeletonRecommendationsArticlesList__viewsInfo}
                  border="5%"
                  width={50}
                  height={20}
              />
          </div>
          <div
              className={classes.SkeletonRecommendationsArticlesList__title}
          >
              <Skeleton
                  border={5}
                  width="100%"
                  height={32}
              />
          </div>
          <div
              className={classes.SkeletonRecommendationsArticlesList__info}
          >
              <Icon
                  className={classes.SkeletonRecommendationsArticlesList__userIcon}
                  Svg={ProfileIcon}
              />
              <Skeleton
                  className={classes.SkeletonRecommendationsArticlesList__userInfo}
                  border="5%"
                  width={70}
                  height={20}
              />
              <Icon
                  className={classes.SkeletonRecommendationsArticlesList__viewsIcon}
                  Svg={EyeIcon}
              />
              <Skeleton
                  className={classes.SkeletonRecommendationsArticlesList__viewsInfo}
                  border="5%"
                  width={50}
                  height={20}
              />
          </div>
          <div
              className={classes.SkeletonRecommendationsArticlesList__title}
          >
              <Skeleton
                  border={5}
                  width="100%"
                  height={32}
              />
          </div>
          <div
              className={classes.SkeletonRecommendationsArticlesList__info}
          >
              <Icon
                  className={classes.SkeletonRecommendationsArticlesList__userIcon}
                  Svg={ProfileIcon}
              />
              <Skeleton
                  className={classes.SkeletonRecommendationsArticlesList__userInfo}
                  border="5%"
                  width={70}
                  height={20}
              />
              <Icon
                  className={classes.SkeletonRecommendationsArticlesList__viewsIcon}
                  Svg={EyeIcon}
              />
              <Skeleton
                  className={classes.SkeletonRecommendationsArticlesList__viewsInfo}
                  border="5%"
                  width={50}
                  height={20}
              />
          </div>
          <div
              className={classes.SkeletonRecommendationsArticlesList__title}
          >
              <Skeleton
                  border={5}
                  width="100%"
                  height={32}
              />
          </div>
          <div
              className={classes.SkeletonRecommendationsArticlesList__info}
          >
              <Icon
                  className={classes.SkeletonRecommendationsArticlesList__userIcon}
                  Svg={ProfileIcon}
              />
              <Skeleton
                  className={classes.SkeletonRecommendationsArticlesList__userInfo}
                  border="5%"
                  width={70}
                  height={20}
              />
              <Icon
                  className={classes.SkeletonRecommendationsArticlesList__viewsIcon}
                  Svg={EyeIcon}
              />
              <Skeleton
                  className={classes.SkeletonRecommendationsArticlesList__viewsInfo}
                  border="5%"
                  width={50}
                  height={20}
              />
          </div>
          <div
              className={classes.SkeletonRecommendationsArticlesList__title}
          >
              <Skeleton
                  border={5}
                  width="100%"
                  height={32}
              />
          </div>
          <div
              className={classes.SkeletonRecommendationsArticlesList__info}
          >
              <Icon
                  className={classes.SkeletonRecommendationsArticlesList__userIcon}
                  Svg={ProfileIcon}
              />
              <Skeleton
                  className={classes.SkeletonRecommendationsArticlesList__userInfo}
                  border="5%"
                  width={70}
                  height={20}
              />
              <Icon
                  className={classes.SkeletonRecommendationsArticlesList__viewsIcon}
                  Svg={EyeIcon}
              />
              <Skeleton
                  className={classes.SkeletonRecommendationsArticlesList__viewsInfo}
                  border="5%"
                  width={50}
                  height={20}
              />
          </div>
      </div>
  );
});
