/**
 *    ArticleDetailRecommendations-component.
 *      - ArticleDetailRecommendations
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import {
  articlesPageRecommendationsReducer,
} from 'features/recommendations/ArticlesPageRecommendations/model/slices/articlesPageRecommendationsSlice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { uid } from 'shared/lib/uid/uid';
import { FullPageBlock } from 'shared/ui/Block/FullPageBlock/FullPageBlock';
import {
  articleDetailRecommendationsReducer,
  getArticleDetailRecommendations,
} from 'features/recommendations/ArticleDetailRecommendations/model/slices/articleDetailRecommendationsSlice';
import {
  getArticleDetailRecommendationsErrorSelector,
  getArticleDetailRecommendationsIsLoadingSelector,
} from 'features/recommendations/ArticleDetailRecommendations/model/selectors/getArticleDetailRecommendations';
import {
  initArticleDetailRecommendations,
} from 'features/recommendations/ArticleDetailRecommendations/model/services/initArticleDetailRecommendations';
import {
  Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Avatar, AvatarRadius, AvatarSize } from 'shared/ui/Avatar/Avatar';
import { Tag, TagTheme } from 'shared/ui/Tag/Tag';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-show.svg';
import { Skeleton } from 'shared/ui/Skeleton/SkeletonDefault/Skeleton';
import {
  RecommendationsArticleDetailList,
} from 'entities/Recommendation/ui/RecommendationsArticleDetail/RecommendationsArticleDetailList/RecommendationsArticleDetailList';
import {
  SkeletonRecommendationsArticlesList,
} from 'shared/ui/Skeleton/SkeletonRecommendationsArticlesList/SkeletonRecommendationsArticlesList';
import classes from './ArticleDetailRecommendations.module.scss';

interface ArticleDetailRecommendationsProps {
    className?: string;
}

const initialReducers: ReducersList = {
  articleDetailRecommendations: articleDetailRecommendationsReducer,
};

export const ArticleDetailRecommendations = memo((props: ArticleDetailRecommendationsProps) => {
  const { className } = props;
  const { t } = useTranslation('recommendations');
  const recommendations = useSelector(getArticleDetailRecommendations.selectAll);
  const isLoading = useSelector(getArticleDetailRecommendationsIsLoadingSelector);
  const error = useSelector(getArticleDetailRecommendationsErrorSelector);
  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    dispatch(initArticleDetailRecommendations());
  });

  if (isLoading) {
    return (
        <FullPageBlock
            className={classNames(classes.ArticleDetailRecommendations, {}, [className])}
            key={uid()}
        >
            <SkeletonRecommendationsArticlesList />
        </FullPageBlock>
    );
  }

  return (
      <DynamicModuleLoader
          reducers={initialReducers}
      >
          <FullPageBlock
              className={classNames(classes.ArticleDetailRecommendations, {}, [className])}
              key={uid()}
          >
              <Text
                  key={uid()}
                  theme={TextTheme.BLOCK_TEXT}
                  title={t('publicationsList')}
                  size={TextSize.S}
                  align={TextAlign.LEFT}
              />
              <RecommendationsArticleDetailList
                  recommendations={recommendations}
                  isLoading={isLoading}
                  error={error}
                  target="_blank"
              />
          </FullPageBlock>
      </DynamicModuleLoader>
  );
});
