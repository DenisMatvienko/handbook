/**
 *    SkeletonNavbarSearchListItem-component.
 *      - SkeletonNavbarSearchListItem
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/SkeletonDefault/Skeleton';
import classes from './SkeletonNavbarSearchList.module.scss';

interface SkeletonNavbarSearchListProps {
    className?: string;
}

export const SkeletonNavbarSearchList = memo((props: SkeletonNavbarSearchListProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
      <div
          className={classNames(classes.skeletonNavbarSearchList, {}, [className])}
      >
          <Skeleton
              border={5}
              width="100%"
              height={65}
          />
          <Skeleton
              border={5}
              width="100%"
              height={65}
          />
          <Skeleton
              border={5}
              width="100%"
              height={65}
          />
      </div>
  );
});
