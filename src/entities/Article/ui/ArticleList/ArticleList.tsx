/**
 *    ArticleList-component.
 *      - Component view articles
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleListItem } from 'entities/Article/ui/ArticleListItem/ArticleListItem';
import { uid } from 'shared/lib/uid/uid';
import { Article, ArticleView } from '../../model/types/article';

import classes from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.TITLE,
  } = props;
  const { t } = useTranslation();

  const renderArticle = (article: Article) => (
      <ArticleListItem
          key={uid()}
          article={article}
          view={view}
      />
  );

  return (
      <div className={classNames(classes.ArticleList, {}, [className])}>
          {
              articles.length > 0
                ? articles?.map(renderArticle)
                : null
          }
      </div>
  );
});