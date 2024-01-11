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
    [classes.skeletonArticleListItem_row]: view === ArticleView.GRID,
    [classes.skeletonArticleListItem_col]: view === ArticleView.LIST,
  };

  if (view === ArticleView.LIST) {
    return (
        <div
            className={classNames(classes.skeletonArticleListItem, mods, [className])}
        >
            <Skeleton
                width="100%"
                height="auto"
                border={5}
                theme={SkeletonTheme.BLOCKS}
                className={classes.skeletonArticleListItem__wrapper_list}
                block
            >
                <div className={classes.skeletonArticleListItem__header}>
                    <Skeleton
                        border={15}
                        width={50}
                        height={50}
                    />
                    <div className={classes.skeletonArticleListItem__info}>
                        <div className={classes.skeletonArticleListItem__infoTop}>
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
                        <div className={classes.skeletonArticleListItem__infoBot}>
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
                    className={classes.skeletonArticleListItem__title}
                    border={5}
                    width="60%"
                    height={30}
                />
                <div
                    className={classes.skeletonArticleListItem__tags}
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
                    className={classNames(classes.skeletonArticleListItem__img, {}, [classes.listViewIndent])}
                    border={5}
                    width="100%"
                    height={250}
                />
                <div />
                <div className={classes.skeletonArticleListItem__description}>
                    <Skeleton
                        border={5}
                        width="100%"
                        height={60}
                    />
                </div>
                <div className={classes.skeletonArticleListItem__footer}>
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
      <div className={classNames(classes.skeletonArticleListItem, mods, [className])}>
          <Skeleton
              width={295}
              height="auto"
              border={5}
              theme={SkeletonTheme.BLOCKS}
              className={classes.skeletonArticleListItem__wrapper_grid}
              block
          >
              <Skeleton
                  className={classes.skeletonArticleListItem__img}
                  border={5}
                  height={150}
              />
              <div
                  className={classes.skeletonArticleListItem__title}
              >
                  <Skeleton
                      border={5}
                      width="100%"
                      height={20}
                  />

              </div>
              <div
                  className={classes.skeletonArticleListItem__statistic}
              >
                  <div className={classes.skeletonArticleListItem__date}>
                      <Skeleton
                          border={5}
                          width={80}
                          height={20}
                      />
                  </div>
                  <div className={classes.skeletonArticleListItem__views}>
                      <Skeleton
                          border={5}
                          width={50}
                          height={20}
                      />
                  </div>
              </div>
              <div
                  className={classes.skeletonArticleListItem__tags}
              >
                  <Skeleton
                      className={classes.skeletonArticleListItem__tag}
                      border={20}
                      width={50}
                      height={30}
                  />
                  <Skeleton
                      className={classes.skeletonArticleListItem__tag}
                      border={20}
                      width={50}
                      height={30}
                  />
                  <Skeleton
                      className={classes.skeletonArticleListItem__tag}
                      border={20}
                      width={50}
                      height={30}
                  />
                  <Skeleton
                      className={classes.skeletonArticleListItem__tag}
                      border={20}
                      width={50}
                      height={30}
                  />
              </div>
          </Skeleton>
      </div>
  );
});
