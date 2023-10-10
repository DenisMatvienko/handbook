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
import classes from './DoubleAdjustableFrame.module.scss';

interface DoubleAdjustableBlockProps {
  className?: string;
  widthLeftBlock?: string | number;
  widthRightBlock?: string | number;
  leftBlock: Array<ReactNode>,
  rightBlock: Array<ReactNode>,
}

export const DoubleAdjustableFrame = (props: DoubleAdjustableBlockProps) => {
  const {
    className,
    widthLeftBlock,
    widthRightBlock,
    leftBlock,
    rightBlock,
  } = props;

  const stylesContent: CSSProperties = {
    width: widthLeftBlock,
  };

  const stylesRecommendations: CSSProperties = {
    width: widthRightBlock,
  };

  return (
      <div className={classNames(classes.blockWrapper)}>
          <div
              className={classNames(classes.blockContent)}
              style={stylesContent}
          >
              {leftBlock.map((item) => (
                item
              ))}
          </div>
          <div
              style={stylesRecommendations}
          >
              {rightBlock.map((item) => (
                item
              ))}
          </div>
      </div>
  );
};
