/**
 *    RecommendationsBlock-component.
 *      - RecommendationsBlock with width 30% of content
 */

import { memo, ReactNode } from 'react';
import classes from './RecommendationsBlock.module.scss';

interface RecommendationsBlockProps {
  children?: ReactNode;
}

export const RecommendationsBlock = memo(({ children }: RecommendationsBlockProps) => (
    <div className={classes.blockRecommendation}>{children}</div>
));
