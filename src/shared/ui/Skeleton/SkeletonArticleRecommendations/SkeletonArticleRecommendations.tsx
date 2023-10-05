/**
 *    SkeletonArticleRecommendations-component.
 *      - Com
 */

import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { FullPageBlock } from 'shared/ui/Block/FullPageBlock/FullPageBlock';
import { Skeleton, SkeletonTheme } from 'shared/ui/Skeleton/SkeletonDefault/Skeleton';
import classes from './SkeletonArticleRecommendations.module.scss';

interface SkeletonArticleRecommendationsProps {
  className?: string;
}

export const SkeletonArticleRecommendations = memo((props: SkeletonArticleRecommendationsProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
      <div>
          <Skeleton
              className={classes.skeletonBlock}
              width="100%"
              height="auto"
              border={5}
              theme={SkeletonTheme.BLOCKS}
              block
          >
              <div className={classes.articleRecommendations}>
                  <Skeleton
                      className={classes.articleItem}
                      border={10}
                      width="50%"
                      height={15}
                  />
                  <Skeleton
                      className={classes.articleItem}
                      border={5}
                      width="80%"
                      height={30}
                  />
                  <Skeleton
                      className={classes.articleItem}
                      border={5}
                      width="80%"
                      height={30}
                  />
                  <Skeleton
                      className={classes.articleItem}
                      border={5}
                      width="80%"
                      height={30}
                  />
                  <Skeleton
                      className={classes.articleItem}
                      border={5}
                      width="80%"
                      height={30}
                  />
              </div>
          </Skeleton>
          <Skeleton
              className={classes.skeletonBlock}
              width="100%"
              height="auto"
              border={5}
              theme={SkeletonTheme.BLOCKS}
              block
          >
              <div className={classes.articleRecommendations}>
                  <Skeleton
                      className={classes.articleItem}
                      border={10}
                      width="50%"
                      height={15}
                  />
                  <Skeleton
                      className={classes.articleItem}
                      border={5}
                      width="80%"
                      height={30}
                  />
                  <Skeleton
                      className={classes.articleItem}
                      border={5}
                      width="80%"
                      height={30}
                  />
                  <Skeleton
                      className={classes.articleItem}
                      border={5}
                      width="80%"
                      height={30}
                  />
                  <Skeleton
                      className={classes.articleItem}
                      border={5}
                      width="80%"
                      height={30}
                  />
              </div>
          </Skeleton>
      </div>
  );
});
