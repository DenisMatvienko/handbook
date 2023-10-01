/**
 *    Code-component.
 *      - Code
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, ReactNode } from 'react';
import classes from './Code.module.scss';

interface CodeProps {
  className?: string;
  children: ReactNode;
}

export const Code = memo((props: CodeProps) => {
  const { className, children } = props;
  const { t } = useTranslation();

  return (
      <pre>
          <code className={classNames(classes.Code, {}, [className])}>
              {children}
          </code>
      </pre>
  );
});
