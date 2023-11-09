/**
 *    ArticleListItem-component.
 *      - ArticleListItem
 *
 *     @param ArticleView
 *         - If view in props will LIST, render list of large cards
 *         - Else it will be gridded cards
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo, useCallback, useState } from 'react';
import { FullPageBlock } from 'shared/ui/Block/FullPageBlock/FullPageBlock';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Tag, TagTheme } from 'shared/ui/Tag/Tag';
import { uid } from 'shared/lib/uid/uid';
import { TagsInfo } from 'widgets/TagsInfo/ui/TagsInfo';
import { Article, ArticleView } from '../../model/types/article';
import classes from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { className, article, view } = props;
  const [isTagModal, setIsTagModal] = useState(false);
  const { t } = useTranslation();

  const onShowTagInfo = useCallback(() => {
    setIsTagModal(true);
  }, []);

  const onCloseTagInfo = useCallback(() => {
    setIsTagModal(false);
  }, []);

  if (view === ArticleView.LIST) {
    return (
        <div className={classNames(classes.ArticleListItem, {}, [className, classes[view]])}>
            <div>
                {article.title}
            </div>
        </div>
    );
  }

  return (
      <div className={classNames(classes.ArticleListItem, {}, [className, classes[view]])}>
          <FullPageBlock className={classes.ArticleListItemCard}>
              <img
                  className={classes.ArticleListItemImg}
                  src={article.img}
                  alt={article.title}
              />
              <div className={classes.ArticleListItemTitle}>
                  {article.title}
              </div>
              {
                  article.type.length > 3
                    ? (
                        <div
                            className={classes.ArticleListItemTags}
                            onClick={onShowTagInfo}
                        >
                            {
                                article?.type.slice(0, 5).map((item) => (
                                    <Tag
                                        className={classes.Tag}
                                        key={uid()}
                                        theme={TagTheme.DEFAULT}
                                        data={item}
                                    />
                                ))
                            }
                            <TagsInfo
                                article={article}
                                isOpen={isTagModal}
                                onClose={onCloseTagInfo}
                            />
                        </div>
                    )
                    : (
                        <div
                            className={classes.ArticleListItemTags}
                            onClick={onShowTagInfo}
                        >
                            {
                              article?.type.map((item) => (
                                  <Tag
                                      className={classes.Tag}
                                      key={uid()}
                                      theme={TagTheme.DEFAULT}
                                      data={item}
                                  />
                              ))
                          }
                            <TagsInfo
                                article={article}
                                isOpen={isTagModal}
                                onClose={onCloseTagInfo}
                            />
                        </div>
                    )
              }
          </FullPageBlock>
      </div>
  );
});
