/**
 *    SkeletonArticleListItem-component.
 *      - SkeletonArticleListItem
 */

import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { Skeleton, SkeletonTheme } from 'shared/ui/Skeleton/SkeletonDefault/Skeleton';
import { ArticleView } from 'entities/Article';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import classes from './SkeletonArticleListItem.module.scss';

interface SkeletonArticleListItemProps {
    className?: string;
    view?: ArticleView;
}

export const SkeletonArticleListItem = memo((props: SkeletonArticleListItemProps) => {
  const { className, view } = props;
  const { t } = useTranslation();

  const mods: Mods = {
    [classes.row]: view === 'GRID',
  };

  if (view === ArticleView.LIST) {
    return (
        <div><p>hello</p></div>
    );
  }

  return (
      <div className={classNames(classes.SkeletonArticleListItem, mods, [className])}>
          <Skeleton
              width={295}
              height="auto"
              border={5}
              theme={SkeletonTheme.BLOCKS}
              className={classes.SkeletonArticleListItemWrapper}
              block
          >
              <Skeleton
                  className={classes.SkeletonArticleListItemImg}
                  border={5}
                  height={150}
              />
              <div
                  className={classes.SkeletonArticleListItemTitle}
              >
                  <Skeleton
                      border={5}
                      width="100%"
                      height={40}
                  />

              </div>
              <div
                  className={classes.SkeletonArticleListItemStats}
              >
                  <div className={classes.SkeletonArticleListItemDate}>
                      <Skeleton
                          border={5}
                          width={80}
                          height={20}
                      />
                  </div>
                  <div className={classes.SkeletonArticleListItemViews}>
                      <Skeleton
                          border={5}
                          width={50}
                          height={20}
                      />
                  </div>
              </div>
              <div
                  className={classes.SkeletonArticleListItemTags}
              >
                  <Skeleton
                      className={classes.Tag}
                      border={20}
                      width={50}
                      height={30}
                  />
                  <Skeleton
                      className={classes.Tag}
                      border={20}
                      width={50}
                      height={30}
                  />
                  <Skeleton
                      className={classes.Tag}
                      border={20}
                      width={50}
                      height={30}
                  />
                  <Skeleton
                      className={classes.Tag}
                      border={20}
                      width={50}
                      height={30}
                  />
              </div>
          </Skeleton>
      </div>
  );
});
