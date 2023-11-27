/**
 *    Page-component.
 *      - Page
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, ReactNode } from 'react';
import classes from './Page.module.scss';

interface PageProps {
    className?: string;
    children?: ReactNode;
}

export const Page = (props: PageProps) => {
  const { className, children } = props;
  const { t } = useTranslation();

  return (
      <section className={classNames(classes.Page, {}, [className])}>
          { children }
      </section>
  );
};
