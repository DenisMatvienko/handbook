/**
 *    ArticleTextBlockComponent-component.
 *      - ArticleTextBlockComponent
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import {
  Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { ArticleTextBlock } from '../../../model/types/article';
import classes from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
  const {
    className,
    block,
  } = props;
  const { t } = useTranslation();

  return (
      <div className={classNames(classes.ArticleTextBlockComponent, {}, [className])}>
          {block.title && (
          <Text
              className={classes.ArticleTextBlockComponentTitle}
              theme={TextTheme.BLOCK_TEXT}
              title={t(block.title)}
              size={TextSize.M}
              align={TextAlign.LEFT}
          />
          )}
          {block.paragraphs.map((paragraph, index) => (
              <Text
                  className={classes.ArticleTextBlockComponentParagraph}
                  theme={TextTheme.BLOCK_TEXT}
                  key={paragraph}
                  text={t(paragraph)}
                  size={TextSize.M}
                  align={TextAlign.LEFT}
              />
          ))}
      </div>
  );
});
