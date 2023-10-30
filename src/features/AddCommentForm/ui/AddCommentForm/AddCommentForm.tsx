/**
 *    AddCommentForm-component.
 *      - AddCommentForm
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import {
  Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonRadius, ButtonTheme } from 'shared/ui/Button/Button';
import { FullPageBlock } from 'shared/ui/Block/FullPageBlock/FullPageBlock';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice';
import {
  getAddCommentFormError,
  getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectors';
import classes from './AddCommentForm.module.scss';

interface AddCommentFormProps {
    className?: string;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

export const AddCommentForm = memo((props: AddCommentFormProps) => {
  const { className } = props;
  const { t } = useTranslation('comments');
  const text = useSelector(getAddCommentFormText);
  const error = useSelector(getAddCommentFormError);
  const dispatch = useAppDispatch();

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value));
  }, [dispatch]);

  return (
      <DynamicModuleLoader
          reducers={reducers}
      >
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
                      onChange={onCommentTextChange}
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
      </DynamicModuleLoader>
  );
});
