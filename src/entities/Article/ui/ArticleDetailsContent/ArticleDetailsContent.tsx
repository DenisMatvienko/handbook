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
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ArticleBlock, ArticleBlockType } from 'entities/Article/model/types/article';
import { Avatar, AvatarSize } from 'shared/ui/Avatar/Avatar';
import {
  Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import ViewsIcon from 'shared/assets/icons/eye-show.svg';
import DateIcon from 'shared/assets/icons/calendar.svg';
import { FullPageBlock } from 'shared/ui/Block/FullPageBlock/FullPageBlock';
import {
  ArticleImageBlockComponent,
} from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import {
  ArticleCodeBlockComponent,
} from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import {
  ArticleTextBlockComponent,
} from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import classes from './ArticleDetailsContent.module.scss';

interface ArticleDetailsContentProps {
  className?: string;
  id: string;
}

export const ArticleDetailsContent = memo((props: ArticleDetailsContentProps) => {
  const {
    className,
    id,
  } = props;
  const { t } = useTranslation('articles');
  const data = useSelector(getArticleDetails);
  const dispatch = useAppDispatch();

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.TEXT:
        return (
            <ArticleTextBlockComponent
                key={block.id}
                block={block}
            />
        );
      case ArticleBlockType.CODE:
        return (
            <ArticleCodeBlockComponent
                key={block.id}
                block={block}
            />
        );
      case ArticleBlockType.IMAGE:
        return (
            <ArticleImageBlockComponent
                key={block.id}
                block={block}
            />
        );
      default:
        return null;
    }
  }, []);

  return (
      <FullPageBlock>
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
                              title={t(data?.title ? data?.title : '-')}
                              align={TextAlign.LEFT}
                              size={TextSize.L}
                          />
                      </div>
                      {
                data?.subtitle
                  ? (
                      <div className={classes.articleBlockHeaderArticleSubtitle}>
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
                      <div className={classes.articleHeaderTopStat}>
                          <div className={classes.articleHeaderTopStatViews}>
                              <Icon
                                  className={classes.viewsIcon}
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
                          <div className={classes.articleHeaderTopStatData}>
                              <Icon
                                  className={classes.dateIcon}
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
                  </div>
              </div>
              <div className={classes.articleContent}>
                  <div className={classes.articleContentBlock}>
                      {data?.blocks.map(renderBlock)}
                  </div>
              </div>
          </div>
      </FullPageBlock>
  );
});
