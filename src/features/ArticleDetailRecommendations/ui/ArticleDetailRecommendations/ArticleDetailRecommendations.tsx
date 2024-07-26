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
} from 'features/ArticlesPageRecommendations/model/slices/articlesPageRecommendationsSlice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { uid } from 'shared/lib/uid/uid';
import { FullPageBlock } from 'shared/ui/Block/FullPageBlock/FullPageBlock';
import {
  articleDetailRecommendationsReducer,
  getArticleDetailRecommendations,
} from 'features/ArticleDetailRecommendations/model/slices/articleDetailRecommendationsSlice';
import {
  getArticleDetailRecommendationsErrorSelector,
  getArticleDetailRecommendationsIsLoadingSelector,
} from 'features/ArticleDetailRecommendations/model/selectors/getArticleDetailRecommendations';
import {
  initArticleDetailRecommendations,
} from 'features/ArticleDetailRecommendations/model/services/initArticleDetailRecommendations';
import {
  Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Avatar, AvatarRadius, AvatarSize } from 'shared/ui/Avatar/Avatar';
import { Tag, TagTheme } from 'shared/ui/Tag/Tag';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-show.svg';
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
            className={classes.ArticleDetailRecommendations__isLoading}
        >
            <p>loading...</p>
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
              {recommendations.map((item) => (
                  <div
                      className={classes.ArticleDetailRecommendations__block}
                      key={item.id}
                  >
                      <Avatar
                          size={AvatarSize.L}
                          radius={AvatarRadius.ELLIPSE}
                          src={item.user.avatar}
                          alt={item.user.avatar}
                      />
                      <AppLink
                          className={classes.ArticleDetailRecommendations__linkToProfile}
                          to={`${RoutePath.profile}${item?.user?.id}`}
                      >
                          <Text
                              key={uid()}
                              theme={TextTheme.BLOCK_TEXT}
                              text={`${item?.user?.username}`}
                              size={TextSize.M}
                              align={TextAlign.LEFT}
                          />
                      </AppLink>
                      <Text
                          key={uid()}
                          theme={TextTheme.SUBTITLE}
                          text={`${item?.article?.createdAt}`}
                          size={TextSize.S}
                          align={TextAlign.LEFT}
                      />
                      <AppLink
                          className={classes.ArticleDetailRecommendations__linkToArticle}
                          to={`${RoutePath.article_details}${item?.article?.id}`}
                      >
                          <Text
                              key={uid()}
                              theme={TextTheme.BLOCK_TEXT}
                              title={`${item?.article?.title}`}
                              size={TextSize.M}
                              align={TextAlign.LEFT}
                          />
                      </AppLink>
                      <div className={classes.ArticleDetailRecommendations__itemInfoWrapper}>
                          <Icon
                              className={classes.ArticleDetailRecommendations__viewsIcon}
                              Svg={EyeIcon}
                          />
                          <Text
                              key={uid()}
                              theme={TextTheme.SUBTITLE}
                              text={`${item?.views}`}
                              size={TextSize.S}
                              align={TextAlign.LEFT}
                          />
                      </div>
                      {item?.article?.type.slice(0, 5).map((item) => (
                          <Tag
                              className={classes.Tag}
                              key={uid()}
                              theme={TagTheme.DEFAULT}
                              data={item}
                          />
                      ))}
                  </div>
              ))}
          </FullPageBlock>
      </DynamicModuleLoader>
  );
});
