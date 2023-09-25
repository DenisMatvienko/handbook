/**
 *    ArticleDetails-component.
 *      - ArticleDetails
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import React, { memo, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
  ErrorPalette,
  ErrorPaletteSize,
  ErrorPaletteTheme,
} from 'shared/ui/ErrorPalette/ErrorPalette';
import { FullPageBlock } from 'shared/ui/Block/FullPageBlock/FullPageBlock';
import { Skeleton, SkeletonTheme } from 'shared/ui/Skeleton/SkeletonDefault/Skeleton';
import {
  SkeletonArticleDetails,
} from 'shared/ui/Skeleton/SkeletonArticleDetails/SkeletonArticleDetails';
import { getProfileForm } from 'entities/Profile';
import { Avatar, AvatarSize } from 'shared/ui/Avatar/Avatar';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import ViewsIcon from 'shared/assets/icons/eye-show.svg';
import DateIcon from 'shared/assets/icons/calendar.svg';
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
                            />
                        </div>
                        <div className={classes.articleHeaderTopStat}>
                            <div className={classes.articleHeaderTopStatViews}>
                                <ViewsIcon className={classes.viewsIcon} />
                                <Text
                                    theme={TextTheme.SUBTITLE}
                                    text={t(String(data?.views))}
                                    align={TextAlign.LEFT}
                                />
                            </div>
                            <div className={classes.articleHeaderTopStatData}>
                                <DateIcon className={classes.dateIcon} />
                                <Text
                                    theme={TextTheme.SUBTITLE}
                                    text={t(String(data?.createdAt))}
                                    align={TextAlign.LEFT}
                                />
                            </div>

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
