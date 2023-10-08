/**
 *    RecommendationsBlock-component.
 *      - RecommendationsBlock with width 30% of content
 */

import { memo, ReactNode } from 'react';
import classes from './RecommendationsBlock.module.scss';

interface RecommendationsBlockProps {
  className?: string;
  children?: ReactNode;
}

export const RecommendationsBlock = memo((props: RecommendationsBlockProps) => {
  const { className, children } = props;
  return (
      <div className={classes.blockRecommendation}>{children}</div>
  );
});
