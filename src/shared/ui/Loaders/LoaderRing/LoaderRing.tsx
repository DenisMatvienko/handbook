/**
 *    LoaderRing-component.
 *
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import classes from './LoaderRing.module.scss';

interface LoaderRingProps {
    className?: string;
}

export const LoaderRing = memo((props: LoaderRingProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
      <div className={classes.ldsRing}>
          <div />
          <div />
          <div />
          <div />
      </div>
  );
});
