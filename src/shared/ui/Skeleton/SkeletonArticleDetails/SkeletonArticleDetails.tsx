/**
 *    SkeletonArticleDetails-component.
 *      - Skeleton for article
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Skeleton, SkeletonTheme } from '../SkeletonDefault/Skeleton';
import classes from './SkeletonArticleDetails.module.scss';

interface SkeletonArticleDetailsProps {
  className?: string;
}

export const SkeletonArticleDetails = memo(({ className }: SkeletonArticleDetailsProps) => (
    <Skeleton
        width="100%"
        height="auto"
        border={5}
        theme={SkeletonTheme.BLOCKS}
        block
    >
        <div className={classes.skeletonBlock}>
            <div className={classes.skeletonHeader}>
                <div className={classes.skeletonHeaderTop}>
                    <div className={classes.skeletonHeaderTopAvatar}>
                        <Skeleton
                            border="50%"
                            width={50}
                            height={50}
                        />
                        <Skeleton
                            className={classes.skeletonHeaderTopTitle}
                            border={5}
                            width={400}
                            height={20}
                        />
                    </div>
                    <div className={classes.skeletonHeaderArticleTitle}>
                        <Skeleton
                            border={5}
                            width={500}
                            height={30}
                        />
                    </div>
                    <div className={classes.skeletonHeaderTopDescr}>
                        <Skeleton
                            border={5}
                            width={260}
                            height={30}
                        />
                    </div>
                </div>
            </div>
            <div className={classes.skeletonContent}>
                <div className={classes.skeletonContentBlock}>
                    <Skeleton
                        border={5}
                        width="100%"
                        height={300}
                    />
                </div>
                <div className={classes.skeletonContentBlock}>
                    <Skeleton
                        border={5}
                        width="100%"
                        height={300}
                    />
                </div>
            </div>
        </div>
    </Skeleton>
));
