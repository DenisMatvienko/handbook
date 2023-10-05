/**
 *    ArticleCodeBlockComponent-component.
 *      - ArticleCodeBlockComponent
 */

import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import { ArticleCodeBlock } from 'entities/Article/model/types/article';
import { Code } from 'shared/ui/Code/Code';
import classes from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
  const { className, block } = props;

  return (
      <div className={classNames(classes.ArticleCodeBlockComponent, {}, [className])}>
          {block.code && (
          <Code>
              {block.code}
          </Code>
          )}
      </div>
  );
});
