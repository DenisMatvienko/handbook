/**
 *    ArticleList-component.
 *      - Component view articles
 *
 *    @param isLoading
 *      - remove structure isLoading from block 'if' to 'render' block, because:
 *        1) observer change all cards on skeletons from 'map'. For every new card add list of skeletons.
 *        2) Need map of skeletons for every new update, for that use 'map' callback in 'render'
 *
 *
 *    @param getSkeletons
 *      -  different with return isLoading in 'if block' and in final return, that:
 *          - 'if block' return content earlier
 *
 */

import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { ArticleListItem } from 'entities/Article/ui/ArticleListItem/ArticleListItem';
import { uid } from 'shared/lib/uid/uid';
import { SkeletonArticleListItem } from 'shared/ui/Skeleton/SkeletonArticleListItem/SkeletonArticleListItem';
import { ArticleSortSelector } from 'features/ArticleSortSelector/ui/ArticleSortSelector';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';

import { useSelector } from 'react-redux';
import { getArticles } from 'pages/ArticlesPage/model/slices/articlePageSlice';
import { getArticlesPageIsLoading } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import classes from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';

interface ArticleListProps {
    className?: string;
    view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.GRID ? 6 : 3)
  .fill(0).map(() => (
      <div
          key={uid()}
          className={classes.articleList}
      >
          <SkeletonArticleListItem key={uid()} view={view} />
      </div>

  ));

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    view = ArticleView.LIST,
  } = props;
  const { t } = useTranslation('articles');
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);

  const renderArticle = (article: Article) => (
      <ArticleListItem
          key={uid()}
          article={article}
          view={view}
      />
  );

  const mods: Mods = {
    [classes.articleList_row]: view === 'GRID',
  };

  if (!isLoading && !articles.length) {
    return (
        <div className={classNames(classes.articleList__notFound, mods, [className])}>
            <div>
                <Text
                    title={t('ArticlesNotFound')}
                    theme={TextTheme.BACKGROUND_TEXT}
                    align={TextAlign.LEFT}
                />
                <Text
                    theme={TextTheme.BACKGROUND_TEXT}
                    text={t('TryTo')}
                    align={TextAlign.LEFT}
                />
            </div>
        </div>
    );
  }

  return (
      <div className={classNames(classes.articleList, mods, [className])}>
          {
              articles.length > 0
                ? articles?.map(renderArticle)
                : null
          }
          { isLoading && getSkeletons(view)}
      </div>
  );
});
