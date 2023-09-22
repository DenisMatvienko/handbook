/**
 *    ArticleDetails-component.
 *      - ArticleDetails
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { memo, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
  ErrorPalette,
  ErrorPaletteSize,
  ErrorPaletteTheme,
} from 'shared/ui/ErrorPalette/ErrorPalette';
import { FullPageBlock } from 'shared/ui/Block/FullPageBlock/FullPageBlock';
import { Skeleton, SkeletonTheme } from 'shared/ui/Skeleton/Skeleton';
import { getArticleDetails, getArticleError } from '../../model/selectors/getArticleDetails';
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
  // const isLoading = useSelector(getArticleIsLoading);
  const isLoading = true;
  const error = useSelector(getArticleError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
        <Skeleton
            width="100%"
            height="auto"
            border={5}
            theme={SkeletonTheme.BLOCKS}
            block
        >
            <div>
                добавить скелетон контента
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Debitis eligendi enim esse eveniet harum minima omnis quae
                quasi sunt, tenetur? Dicta doloremque doloribus earum est
                reprehenderit sequi, velit vitae voluptatum!
            </div>
        </Skeleton>
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
        <div className={classNames(classes.ArticleDetails, {}, [className])}>
            <FullPageBlock>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, cupiditate
                dolorem ducimus eligendi excepturi harum impedit, ipsum itaque laboriosam maiores
                neque nostrum omnis perspiciatis quasi qui quibusdam quod repellat, sed.
            </FullPageBlock>
        </div>
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
