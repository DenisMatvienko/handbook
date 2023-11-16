/**
 *    ArticleList-component.
 *      - Component view articles
 */

import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleListItem } from 'entities/Article/ui/ArticleListItem/ArticleListItem';
import { uid } from 'shared/lib/uid/uid';
import { SkeletonArticleListItem } from 'shared/ui/Skeleton/SkeletonArticleListItem/SkeletonArticleListItem';
import { Article, ArticleView } from '../../model/types/article';

import classes from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.GRID ? 6 : 3)
  .fill(0).map(() => (
      <SkeletonArticleListItem key={uid()} view={view} />
  ));

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading = true,
    view = ArticleView.LIST,
  } = props;
  const { t } = useTranslation();

  const renderArticle = (article: Article) => (
      <ArticleListItem
          key={uid()}
          article={article}
          view={view}
      />
  );

  const mods: Mods = {
    [classes.row]: view === 'GRID',
  };

  if (isLoading) {
    return (
        <div
            className={classNames(classes.ArticleList, mods, [className])}
        >
            {getSkeletons(view)}
        </div>
    );
  }

  return (
      <div className={classNames(classes.ArticleList, mods, [className])}>
          {
              articles.length > 0
                ? articles?.map(renderArticle)
                : null
          }
      </div>
  );
});
