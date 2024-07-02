/**
 *    RecommendationsArticleListMain-component.
 *      - RecommendationsArticleListMain
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo, useCallback, useMemo } from 'react';
import {
  Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { uid } from 'shared/lib/uid/uid';
import { Search } from 'entities/Search/model/types/search';
import { Recommendation } from 'entities/Recommendation/model/types/recommendation';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  initArticlePageRecommendations,
} from 'features/ArticlesPageRecommendations/model/services/initArticlePageRecommendations';
import {
  initNavbarSearch,
} from 'features/NavbarSearch/model/services/initNavbarSearch/initNavbarSearch';
import {
  fetchArticlePageRecommendations,
} from 'features/ArticlesPageRecommendations/model/services/fetchArticlePageRecommendations';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import {
  RecommendationsArticleItemMain,
} from 'entities/Recommendation/ui/RecommendationsArticleItemMain/RecommendationsArticleItemMain';
import classes from './RecommendationsArticleListMain.module.scss';

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
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  if (isLoading) {
    return (
        <div>loading..</div>
    );
  }

  return (
      <div className={classNames(classes.RecommendationsArticleListMain, {}, [className])}>
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
