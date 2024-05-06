/**
 *    TagsInfo-component.
 *      - Info window about tags, which didn't throw into overflow in card
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { Article } from 'entities/Article';
import { Modal, ModalTheme } from 'shared/ui/Modal/Modal';
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
          className={classNames(classes.tagsInfo, {}, [className])}
          isOpen={isOpen}
          onClose={onClose}
          modalTheme={ModalTheme.DEFAULT}
          lazy
      >
          <div className={classes.tagsInfo__wrapper}>
              {
                  article?.type.map((item) => (
                      <Tag
                          className={classNames(classes.tagsInfo__tag, {}, [className])}
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
