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
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-show.svg';
import { Tag, TagTheme } from 'shared/ui/Tag/Tag';
import { uid } from 'shared/lib/uid/uid';
import { TagsInfo } from 'widgets/TagsInfo/ui/TagsInfo';
import {
  Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { stringCutter } from 'shared/lib/stringCutter/stringCutter';
import { Card } from 'shared/ui/Card/Card';
import { useHover } from 'shared/lib/hooks/useHover/useHover';
import { Avatar, AvatarRadius, AvatarSize } from 'shared/ui/Avatar/Avatar';
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
  const [isHover, bindIsHover] = useHover();
  const { t } = useTranslation();

  const onShowTagInfo = useCallback(() => {
    setIsTagModal(true);
  }, []);

  const onCloseTagInfo = useCallback(() => {
    setIsTagModal(false);
  }, []);

  if (view === ArticleView.LIST) {
    return (
        <Card className={classNames(classes.ArticleListItemListView, {}, [className, classes[view]])}>
            <div className={classes.ArticleListItemListViewHeader}>
                <Avatar
                    size={AvatarSize.M}
                    radius={AvatarRadius.ELLIPSE}
                    src={article.user.avatar}
                    alt={article.user.avatar}
                />
                <Text
                    className={classes.commentTitle}
                    theme={TextTheme.BLOCK_TEXT}
                    title={article.user.username}
                    size={TextSize.S}
                />
                <Text
                    theme={TextTheme.SUBTITLE}
                    text="27.10.2017"
                    size={TextSize.S}
                />
            </div>
            <Text
                theme={TextTheme.BLOCK_TEXT}
                title={stringCutter(article.title, 50)}
                size={TextSize.M}
                align={TextAlign.LEFT}
            />
            <div
                className={classes.ArticleListItemListViewTags}
            >
                {article?.type.slice(0, 5).map((item, index) => (
                    <Text
                        theme={TextTheme.SUBTITLE}
                        text={index < 4 ? `${item}, ` : `${item}.`}
                        size={TextSize.S}
                    />
                ))}
            </div>
            <img
                className={classNames(classes.ArticleListItemImg, {}, [classes.ListViewIndent])}
                src={article.img}
                alt={article.title}
            />
        </Card>
    );
  }

  return (
      <Card
          {...bindIsHover}
          className={classes.CardGrid}
      >
          <img
              className={classes.ArticleListItemImg}
              src={article.img}
              alt={article.title}
          />
          <div className={classes.ArticleListItemTitle}>
              <Text
                  theme={TextTheme.BLOCK_TEXT}
                  title={stringCutter(article.title, 28)}
                  size={TextSize.S}
                  align={TextAlign.LEFT}
              />

          </div>
          <div
              className={classes.ArticleListItemStats}
          >
              <div className={classes.ArticleListItemDate}>
                  <Text
                      theme={TextTheme.SUBTITLE}
                      text="27.10.2017"
                      size={TextSize.S}
                  />
              </div>
              <div className={classes.ArticleListItemViews}>
                  <Icon
                      className={classes.ArticleListItemIcon}
                      Svg={EyeIcon}
                  />
                  <Text
                      theme={TextTheme.BLOCK_TEXT}
                      text="1024"
                      size={TextSize.S}
                  />
              </div>
          </div>
          <div
              className={classes.ArticleListItemTags}
              onClick={onShowTagInfo}
          >
              {article?.type.slice(0, 5).map((item) => (
                  <Tag
                      className={classes.Tag}
                      key={uid()}
                      theme={TagTheme.DEFAULT}
                      data={item}
                  />
              ))}
              <TagsInfo
                  article={article}
                  isOpen={isTagModal}
                  onClose={onCloseTagInfo}
              />
          </div>
      </Card>
  );
});
