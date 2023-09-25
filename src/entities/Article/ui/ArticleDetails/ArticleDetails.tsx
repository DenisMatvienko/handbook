/**
 *    ArticleDetails-component.
 *      - ArticleDetails
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import React, { memo, useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
  ErrorPalette,
  ErrorPaletteSize,
  ErrorPaletteTheme,
} from 'shared/ui/ErrorPalette/ErrorPalette';
import { FullPageBlock } from 'shared/ui/Block/FullPageBlock/FullPageBlock';
import { Skeleton } from 'shared/ui/Skeleton/SkeletonDefault/Skeleton';
import {
  SkeletonArticleDetails,
} from 'shared/ui/Skeleton/SkeletonArticleDetails/SkeletonArticleDetails';
import { Avatar, AvatarSize } from 'shared/ui/Avatar/Avatar';
import {
  Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import ViewsIcon from 'shared/assets/icons/eye-show.svg';
import DateIcon from 'shared/assets/icons/calendar.svg';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import {
  ArticleImageBlockComponent,
} from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import {
  ArticleCodeBlockComponent,
} from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import {
  ArticleTextBlockComponent,
} from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import {
  getArticleDetails,
  getArticleError,
  getArticleIsLoading,
} from '../../model/selectors/getArticleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import classes from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const {
    className,
    id,
  } = props;
  const { t } = useTranslation('articles');
  const data = useSelector(getArticleDetails);
  const isLoading = useSelector(getArticleIsLoading);
  const error = useSelector(getArticleError);
  const dispatch = useAppDispatch();

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent />;
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent />;
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent />;
      default:
        return null;
    }
  }, []);

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
        <SkeletonArticleDetails />
    );
  } else if (error) {
    content = (
        <ErrorPalette
            className={classes.articleError}
            theme={ErrorPaletteTheme.DEFAULT}
            title={t('ArticleErrorTitle')}
            text={t('ArticleErrorText')}
            size={ErrorPaletteSize.XXL}
            refresh
        />
    );
  } else {
    content = (
        <FullPageBlock className={classNames(classes.ArticleDetails, {}, [className])}>
            <div className={classes.articleBlock}>
                <div className={classes.articleBlockHeader}>
                    <div className={classes.articleBlockHeaderTop}>
                        <div className={classes.articleBlockHeaderTopAvatar}>
                            <Avatar
                                size={AvatarSize.L}
                                src={data?.img}
                                alt={data?.title}
                            />
                            <Text
                                className={classes.articleBlockTopTitle}
                                theme={TextTheme.BLOCK_TEXT}
                                title={t(data?.title ? data?.title : `Статья #${data?.id}`)}
                                align={TextAlign.LEFT}
                            />
                        </div>
                        <div className={classes.articleBlockHeaderArticleSubtitle}>
                            <Text
                                theme={TextTheme.SUBTITLE}
                                text={t(data?.subtitle ? data?.subtitle : `Статья #${data?.id}`)}
                                align={TextAlign.LEFT}
                                size={TextSize.S}
                            />
                        </div>
                        <div className={classes.articleHeaderTopStat}>
                            <div className={classes.articleHeaderTopStatViews}>
                                <Icon
                                    className={classes.viewsIcon}
                                    Svg={ViewsIcon}
                                    theme={IconTheme.BLOCK_ICON}
                                />
                                <Text
                                    theme={TextTheme.BLOCK_TEXT}
                                    text={t(String(data?.views))}
                                    align={TextAlign.LEFT}
                                    size={TextSize.S}
                                />
                            </div>
                            <div className={classes.articleHeaderTopStatData}>
                                <Icon
                                    className={classes.dateIcon}
                                    Svg={DateIcon}
                                    theme={IconTheme.BLOCK_ICON}
                                />
                                <Text
                                    theme={TextTheme.BLOCK_TEXT}
                                    text={t(String(data?.createdAt))}
                                    align={TextAlign.LEFT}
                                    size={TextSize.S}
                                />
                            </div>

                        </div>
                    </div>
                </div>
                <div className={classes.articleContent}>
                    <div className={classes.articleContentBlock}>
                        {data?.blocks.map(renderBlock)}
                    </div>
                </div>
            </div>
        </FullPageBlock>
    );
  }

  return (
      <DynamicModuleLoader
          reducers={reducers}
          removeAfterUnmount
      >
          <div className={classNames(classes.ArticleDetails, {}, [className])}>
              {content}
          </div>
      </DynamicModuleLoader>
  );
});
