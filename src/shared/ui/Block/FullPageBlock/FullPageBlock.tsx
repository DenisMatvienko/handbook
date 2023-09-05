import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ReactNode } from 'react';
import classes from './FullPageBlock.module.scss';

interface FullPageBlockProps {
  className?: string,
  children: ReactNode,
}

export const FullPageBlock = ({
  className,
  children,
}: FullPageBlockProps) => {
  const { t } = useTranslation();

  return (
      <div className={classNames(classes.blockWrapper)}>
          {children}
      </div>
  );
};
