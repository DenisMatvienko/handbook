/**
 *    ArticleListItem-component.
 *      - ArticleListItem
 *
 *     @param ArticleView
 *         - If view in props will LIST, render list of large cards
 *         - Else it will be gridded cards
 */

import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo, useCallback, useState } from 'react';
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
import { Button, ButtonRadius, ButtonTheme } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import {
  Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/article';
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
  const { t } = useTranslation('articles');
  const navigate = useNavigate();
  const views = (
      <div className={classes.ArticleListItemViews}>
          <Icon
              className={classes.ArticleListItemIcon}
              Svg={EyeIcon}
          />
          <Text
              theme={TextTheme.BLOCK_TEXT}
              text={t(String(article?.views))}
              size={TextSize.S}
          />
      </div>
  );

  const textBlock = (
    article.blocks.find((item) => (item.type === ArticleBlockType.TEXT))
  ) as ArticleTextBlock;

  const paragraph = textBlock.paragraphs.map((item, index) => (
      <Text
          key={uid()}
          theme={TextTheme.BLOCK_TEXT}
          text={item}
          size={TextSize.M}
          align={TextAlign.LEFT}
      />
  ));

  const onOpenArticles = useCallback(() => {
    navigate(RoutePath.article_details + article.id);
  }, [article.id, navigate]);

  const onShowTagInfo = useCallback(() => {
    setIsTagModal(true);
  }, []);

  const onCloseTagInfo = useCallback(() => {
    setIsTagModal(false);
  }, []);

  if (view === ArticleView.LIST) {
    return (
        <Card className={classNames(classes.articleListView, {}, [className, classes[view]])}>
            <div className={classes.articleListView__header}>
                <Avatar
                    size={AvatarSize.L}
                    radius={AvatarRadius.ELLIPSE}
                    src={article.user.avatar}
                    alt={article.user.avatar}
                />
                <div className={classes.articleListView__info}>
                    <div className={classes.articleListView__topSide}>
                        <Text
                            theme={TextTheme.BLOCK_TEXT}
                            title={article.user.username}
                            size={TextSize.S}
                        />
                        <Text
                            theme={TextTheme.SUBTITLE}
                            text={t(String(article?.createdAt))}
                            size={TextSize.S}
                        />
                    </div>
                    <div className={classes.articleListView__botSide}>
                        <Text
                            theme={TextTheme.SUBTITLE}
                            text={t('22 часа назад')}
                            size={TextSize.S}
                        />
                        {views}
                    </div>
                </div>
            </div>
            <div
                onClick={onOpenArticles}
            >
                <Text
                    className={classes.articleListView__title}
                    theme={TextTheme.BLOCK_TEXT}
                    title={stringCutter(article.title, 50)}
                    size={TextSize.M}
                    align={TextAlign.LEFT}
                />
            </div>
            <div
                className={classes.articleListView__tags}
            >
                {article?.type.slice(0, 5).map((item, index) => (
                    <Text
                        key={uid()}
                        className={classes.articleListView__subtitle}
                        theme={TextTheme.SUBTITLE}
                        text={index < article.type.slice(0, 5).length - 1 ? `${item}, ` : `${item}.`}
                        size={TextSize.S}
                    />
                ))}
            </div>
            <div
                onClick={onOpenArticles}
            >
                <img
                    className={classNames(
                      `${classes.articleImage} ${classes.articleImage_list}`,
                      {},
                      [classes.ListViewIndent],
                    )}
                    src={article.img}
                    alt={article.title}
                />
            </div>

            <div />
            <div className={classes.articleListView__description}>
                {paragraph}
            </div>
            <div className={classes.articleListView__footer}>
                <Button
                    onClick={onOpenArticles}
                    theme={ButtonTheme.BACKGROUND_BLOCK}
                    radius={ButtonRadius.SEMI_ELLIPSE}
                >
                    {t('ReadMore')}
                </Button>
            </div>
        </Card>
    );
  }

  return (
      <Card
          {...bindIsHover}
          className={classes.articleGridView}
      >
          <div
              className={`${classes.articleImage__wrapper}`}
          >
              <img
                  onClick={onOpenArticles}
                  aria-hidden="true"
                  className={`${classes.articleImage} ${classes.articleImage_grid}`}
                  src={article.img}
                  alt={article.title}
              />
          </div>
          <div
              onClick={onOpenArticles}
              className={classes.articleGridView__title}
          >
              <Text
                  theme={TextTheme.BLOCK_TEXT}
                  title={stringCutter(article.title, 40)}
                  size={TextSize.S}
                  align={TextAlign.LEFT}
              />

          </div>
          <div
              className={classes.articleGridView__statistic}
          >
              <div className={classes.articleGridView__date}>
                  <Text
                      theme={TextTheme.SUBTITLE}
                      text="27.10.2017"
                      size={TextSize.S}
                  />
              </div>
              {views}
          </div>
          <div
              className={classes.articleGridView__tags}
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
