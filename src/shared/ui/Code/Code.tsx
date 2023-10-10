/**
 *    Code-component.
 *      - Code block.
 *        Children contain special string, which should contain data view as code
 */

import { useTranslation } from 'react-i18next';
import { memo, ReactNode, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import CopyIcon from 'shared/assets/icons/copy.svg';
import classes from './Code.module.scss';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo((props: CodeProps) => {
  const { className, text } = props;
  const { t } = useTranslation();

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
      <div className={classes.codeWrapper}>
          <pre>
              <Button
                  onClick={onCopy}
                  theme={ButtonTheme.CLEAR}
                  size={ButtonSize.XXL}
                  className={classes.copyButton}
              >
                  <Icon
                      className={classes.copyIcon}
                      theme={IconTheme.BLOCK_ICON}
                      Svg={CopyIcon}
                  />
              </Button>
              <code className={classNames(classes.Code, {}, [className])}>
                  {text}
              </code>
          </pre>
      </div>
  );
});
