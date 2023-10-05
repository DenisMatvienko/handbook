/**
 *    ArticleImageBlockComponent-component.
 *      - ArticleImageBlockComponent
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { ArticleImageBlock } from 'entities/Article/model/types/article';
import {
  Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import classes from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
  const { className, block } = props;
  const { t } = useTranslation();

  return (
      <div className={classNames(classes.ArticleImageBlockComponent, {}, [className])}>
          <img
              className={classes.img}
              src={block.src}
              alt={block.title}
          />
          {block.title
              && (
              <Text
                  className={classes.imgTitle}
                  theme={TextTheme.SUBTITLE}
                  text={t(block.title)}
                  align={TextAlign.CENTER}
                  size={TextSize.S}
              />
              )}
      </div>
  );
});
