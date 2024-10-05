/**
 *    RecommendationsArticleListMain-component.
 *      - RecommendationsArticleListMain
 */

import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { uid } from 'shared/lib/uid/uid';
import { Recommendation } from 'entities/Recommendation/model/types/recommendation';
import {
  RecommendationsArticleItemMain,
} from 'entities/Recommendation/ui/RecommendationsArticleMain/RecommendationsArticleItemMain/RecommendationsArticleItemMain';
import {
  SkeletonRecommendationsArticlesList,
} from 'shared/ui/Skeleton/SkeletonRecommendationsArticlesList/SkeletonRecommendationsArticlesList';

interface RecommendationsArticleListMainProps {
  className?: string;
  recommendations: Recommendation[];
  isLoading?: boolean;
  error?: string;
}

export const RecommendationsArticleListMain = memo((props: RecommendationsArticleListMainProps) => {
  const {
    className,
    recommendations,
    isLoading,
    error,
  } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
        <SkeletonRecommendationsArticlesList />
    );
  }

  return (
      <div className={className}>
          {
            recommendations?.map((item) => (
                <RecommendationsArticleItemMain
                    key={uid()}
                    recommendation={item}
                />
            ))
          }
      </div>
  );
});
