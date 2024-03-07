/**
 *    NavbarSearchListItem-component.
 *      - NavbarSearchListItem
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Search } from 'entities/Search/model/types/search';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import classes from './NavbarSearchListItem.module.scss';

interface NavbarSearchListItemProps {
    className?: string;
    article?: Search;
}

export const NavbarSearchListItem = memo((props: NavbarSearchListItemProps) => {
  const { className, article } = props;
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onOpenArticles = useCallback(() => {
    if (article) {
      navigate(RoutePath.article_details + article.id);
    }
  }, [navigate]);

  return (
      <div
          onClick={onOpenArticles}
          className={classNames(classes.navbarSearchListItem, {}, [className])}
      >
          { article?.title }
      </div>
  );
});
