/**
 *    ArticleDetailsContent-component.
 *      - Content which should render as article-content, when
 *        extra reducer by fetchArticleById - is fulfilled;
 *
 *    @param renderBlock.
 *      - Include handle state of article;
 */

import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getArticleDetails } from 'entities/Article/model/selectors/getArticleDetails';
import { ArticleBlock, ArticleBlockType } from 'entities/Article/model/types/article';
import { Avatar, AvatarSize } from 'shared/ui/Avatar/Avatar';
import {
  Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import ViewsIcon from 'shared/assets/icons/eye-show.svg';
import DateIcon from 'shared/assets/icons/calendar.svg';
import { FullPageBlock } from 'shared/ui/Block/FullPageBlock/FullPageBlock';
import { Tag, TagTheme } from 'shared/ui/Tag/Tag';
import { uid } from 'shared/lib/uid/uid';
import { ArticleImageBlockComponent } from '../ArticleBlocks/ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleCodeBlockComponent } from '../ArticleBlocks/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleBlocks/ArticleTextBlockComponent/ArticleTextBlockComponent';
import classes from './ArticleDetailsContent.module.scss';

interface ArticleDetailsContentProps {
  className?: string;
}

export const ArticleDetailsContent = memo((props: ArticleDetailsContentProps) => {
  const {
    className,
  } = props;
  const { t } = useTranslation('articles');
  const data = useSelector(getArticleDetails);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.TEXT:
        return (
            <ArticleTextBlockComponent
                key={uid()}
                block={block}
            />
        );
      case ArticleBlockType.CODE:
        return (
            <ArticleCodeBlockComponent
                key={uid()}
                block={block}
            />
        );
      case ArticleBlockType.IMAGE:
        return (
            <ArticleImageBlockComponent
                key={uid()}
                block={block}
            />
        );
      default:
        return null;
    }
  }, []);

  return (
      <FullPageBlock>
          <div className={classes.articleDetailsContent}>
              <div className={classes.articleDetailsContent__header}>
                  <div className={classes.articleDetailsContent__headerTop}>
                      <div className={classes.articleDetailsContent__avatar}>
                          <Avatar
                              size={AvatarSize.L}
                              src={data?.img}
                              alt={data?.title}
                          />
                          <Text
                              className={classes.articleDetailsContent__title}
                              theme={TextTheme.BLOCK_TEXT}
                              title={t(data?.title ? data?.title : '-')}
                              align={TextAlign.LEFT}
                              size={TextSize.L}
                          />
                      </div>
                      {
                data?.subtitle
                  ? (
                      <div className={classes.articleDetailsContent__subtitle}>
                          <Text
                              theme={TextTheme.SUBTITLE}
                              text={t(data?.subtitle)}
                              align={TextAlign.LEFT}
                              size={TextSize.S}
                          />
                      </div>
                  )
                  : (
                      <Text
                          theme={TextTheme.SUBTITLE}
                          text="-"
                          align={TextAlign.LEFT}
                          size={TextSize.S}
                      />
                  )
              }
                      <div className={classes.articleDetailsContent__statistic}>
                          <div className={classes.articleDetailsContent__views}>
                              <Icon
                                  className={classes.articleDetailsContent__viewIcon}
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
                          <div className={classes.articleDetailsContent__date}>
                              <Icon
                                  className={classes.articleDetailsContent__dateIcon}
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
                      <div className={classes.articleDetailsContent__statisticBottom}>
                          {
                              data?.type.map((item) => (
                                  <Tag
                                      className={classes.articleDetailsContent__tag}
                                      key={uid()}
                                      theme={TagTheme.DEFAULT}
                                      data={item}
                                  />
                              ))
                              }
                      </div>
                  </div>
              </div>
              <div className={classes.articleDetailsContent__content}>
                  <div className={classes.articleDetailsContent__contentWrapper}>
                      {data?.blocks.map(renderBlock)}
                  </div>
              </div>
              <div className={classes.articleDetailsContent__BottomPart}>
                  <Text
                      className={classes.articleDetailsContent__tagsTitle}
                      theme={TextTheme.BLOCK_TEXT}
                      title={`${t('tags')}: `}
                      align={TextAlign.LEFT}
                      size={TextSize.S}
                  />
                  {
                      data?.type.map((item) => (
                          <Tag
                              className={classes.articleDetailsContent__tag}
                              key={uid()}
                              theme={TagTheme.DEFAULT}
                              data={item}
                          />
                      ))
                   }
              </div>
          </div>
      </FullPageBlock>
  );
});
