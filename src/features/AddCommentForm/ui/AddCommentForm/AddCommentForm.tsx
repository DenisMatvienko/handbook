/**
 *    AddCommentForm-component.
 *      - AddCommentForm
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import {
  Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonRadius, ButtonTheme } from 'shared/ui/Button/Button';
import { FullPageBlock } from 'shared/ui/Block/FullPageBlock/FullPageBlock';
import classes from './AddCommentForm.module.scss';

interface AddCommentFormProps {
    className?: string;
}

export const AddCommentForm = memo((props: AddCommentFormProps) => {
  const { className } = props;
  const { t } = useTranslation('comments');

  return (
      <FullPageBlock
          className={classNames(classes.AddCommentForm, {}, [className])}
      >
          <div
              className={classes.AddCommentTitle}
          >
              <Text
                  theme={TextTheme.BLOCK_TEXT}
                  title={t('AddCommentTitle')}
                  align={TextAlign.CENTER}
                  size={TextSize.S}
              />
          </div>
          <div
              className={classes.AddCommentInputWrapper}
          >
              <Input
                  className={classes.AddCommentInput}
                  placeholderTemplate={t('AddCommentPlaceholder')}
              />
          </div>
          <div
              className={classes.AddCommentButton}
          >
              <Button
                  theme={ButtonTheme.BACKGROUND_BLACK}
                  radius={ButtonRadius.SEMI_ELLIPSE}
              >
                  {t('AddCommentSendBtn')}
              </Button>
          </div>

      </FullPageBlock>
  );
});
