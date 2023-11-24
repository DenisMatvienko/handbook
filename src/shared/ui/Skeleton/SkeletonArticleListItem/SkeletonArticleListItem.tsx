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
    [classes.row]: view === ArticleView.GRID,
    [classes.col]: view === ArticleView.LIST,
  };

  if (view === ArticleView.LIST) {
    return (
        <div
            className={classNames(classes.SkeletonArticleListItem, mods, [className])}
        >
            <Skeleton
                width="100%"
                height="auto"
                border={5}
                theme={SkeletonTheme.BLOCKS}
                className={classes.SkeletonArticleListItemWrapper}
                block
            >
                <div className={classes.SkeletonArticleListItemListViewHeader}>
                    <Skeleton
                        border={15}
                        width={50}
                        height={50}
                    />
                    <div className={classes.ArticleListItemListViewHeaderInfo}>
                        <div className={classes.ArticleListItemListViewHeaderInfoTop}>
                            <Skeleton
                                border={5}
                                width={150}
                                height={20}
                            />
                            <Skeleton
                                border={5}
                                width={70}
                                height={15}
                            />
                        </div>
                        <div className={classes.ArticleListItemListViewHeaderInfoBot}>
                            <Skeleton
                                border={5}
                                width={70}
                                height={15}
                            />
                            <Skeleton
                                border={5}
                                width={30}
                                height={15}
                            />
                        </div>
                    </div>
                </div>
                <Skeleton
                    className={classes.SkeletonArticleListItemListViewTitle}
                    border={5}
                    width="60%"
                    height={30}
                />
                <div
                    className={classes.ArticleListItemListViewTags}
                >
                    <Skeleton
                        border={10}
                        width={50}
                        height={15}
                    />
                    <Skeleton
                        border={10}
                        width={30}
                        height={15}
                    />
                    <Skeleton
                        border={10}
                        width={40}
                        height={15}
                    />
                    <Skeleton
                        border={10}
                        width={70}
                        height={15}
                    />
                </div>
                <Skeleton
                    className={classNames(classes.ArticleListItemImg, {}, [classes.ListViewIndent])}
                    border={5}
                    width="100%"
                    height={250}
                />
                <div />
                <div className={classes.ArticleListItemListViewDescription}>
                    <Skeleton
                        border={5}
                        width="100%"
                        height={60}
                    />
                </div>
                <div className={classes.ArticleListItemListViewFooter}>
                    <Skeleton
                        border={5}
                        width={115}
                        height={35}
                    />
                </div>
            </Skeleton>
        </div>
    );
  }

  return (
      <div className={classNames(classes.SkeletonArticleListItem, mods, [className])}>
          <Skeleton
              width={295}
              height="auto"
              border={5}
              theme={SkeletonTheme.BLOCKS}
              className={classes.SkeletonArticleListGridWrapper}
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
                      height={20}
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
