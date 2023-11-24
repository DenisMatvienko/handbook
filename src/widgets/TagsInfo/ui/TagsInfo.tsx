/**
 *    TagsInfo-component.
 *      - TagsInfo
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo, Suspense } from 'react';
import { Article } from 'entities/Article';
import { PageLoader } from 'widgets/PageLoader';
import { LoginFormAsync } from 'features/AuthByUsername/ui/LoginForm/LoginForm.async';
import { Modal } from 'shared/ui/Modal/Modal';
import { Tag, TagTheme } from 'shared/ui/Tag/Tag';
import { uid } from 'shared/lib/uid/uid';
import classes from './TagsInfo.module.scss';

interface TagsInfoProps {
    className?: string;
    article: Article;
    isOpen?: boolean;
    onClose?: () => void;
}

export const TagsInfo = memo((props: TagsInfoProps) => {
  const {
    className, article, isOpen, onClose,
  } = props;
  const { t } = useTranslation();

  return (
      <Modal
          className={classNames(classes.TagsInfo, {}, [className])}
          isOpen={isOpen}
          onClose={onClose}
          lazy
      >
          <div className={classes.TagsWrapper}>
              {
                  article?.type.map((item) => (
                      <Tag
                          className={classNames(classes.Tag, {}, [className])}
                          key={uid()}
                          theme={TagTheme.DEFAULT}
                          data={item}
                      />
                  ))
              }
          </div>
      </Modal>
  );
});
