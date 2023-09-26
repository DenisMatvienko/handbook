/**
 *    DoubleAdjustableBlock-component.
 *      - Block for content with any pallet by right side;
 *      - Second block add as props;
 *        Recommended sizes:
 *        - content size with - 70%;
 *        - recommendation size should be - 30%;
 *
 *    @param children.
 *      - Only for article's content. Block width 69%;
 *
 *    @param recommendations.
 *      - Only for any information content (as recommendations, story etc..);
 *        css property should be:
 *        - with width - 30%;
 *        - margin - 1%;
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, ReactNode } from 'react';
import classes from './DoubleAdjustableBlock.module.scss';

interface DoubleAdjustableBlockProps {
  className?: string;
  width?: string | number;
  children: ReactNode,
  recommendations: ReactNode,
}

export const DoubleAdjustableBlock = (props: DoubleAdjustableBlockProps) => {
  const {
    className,
    width,
    children,
    recommendations,
  } = props;

  const styles: CSSProperties = {
    width,
  };

  return (
      <div className={classNames(classes.blockWrapper)}>
          <div
              className={classNames(classes.blockContent)}
              style={styles}
          >
              {children}
          </div>
          {recommendations}
      </div>
  );
};
