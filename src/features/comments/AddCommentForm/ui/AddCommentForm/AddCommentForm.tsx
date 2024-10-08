/**
 *    AddCommentForm-component.
 *      - AddCommentForm
 *
 *      @param sendComment
 *          - By this props can delegate change comments for any entities (it can be as comments for Article,
 *          comments for profile, comments for photos, and any other types of comments)
 *          - You just need to create in entities fetch as addCommentForArticle
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
import { getUserAuthData } from 'entities/User';
import { getArticleError } from 'entities/Article/model/selectors/getArticleDetails';
import { getArticleCommentsIsLoading } from 'pages/ArticleDetailsPage/model/selectors/comments/GetComments';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice';
import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import classes from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
  const { className, onSendComment } = props;
  const { t } = useTranslation('comments');
  const isAuth = useSelector(getUserAuthData);
  const isArticleError = useSelector(getArticleError);
  const text = useSelector(getAddCommentFormText);
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleCommentsIsLoading);

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value));
  }, [dispatch]);

  const onSendHandler = useCallback(() => {
    onSendComment(text || '');
    onCommentTextChange('');
  }, [onCommentTextChange, onSendComment, text]);

  if (isLoading || !isAuth || isArticleError) {
    return (
        <div className={classes.NoneDisplayed} />
    );
  }

  return (
      <DynamicModuleLoader
          reducers={reducers}
      >
          <FullPageBlock
              className={classNames(classes.addCommentForm, {}, [className])}
          >
              <div
                  className={classes.addCommentForm__title}
              >
                  <Text
                      theme={TextTheme.BLOCK_TEXT}
                      title={t('AddCommentTitle')}
                      align={TextAlign.CENTER}
                      size={TextSize.S}
                  />
              </div>
              <div
                  className={classes.addCommentForm__inputWrapper}
              >
                  <Input
                      onChange={onCommentTextChange}
                      className={classes.addCommentForm__input}
                      placeholderTemplate={t('AddCommentPlaceholder')}
                  />
              </div>
              <div
                  className={classes.addCommentForm__btn}
              >
                  <Button
                      onClick={onSendHandler}
                      theme={ButtonTheme.BACKGROUND_BLOCK}
                      radius={ButtonRadius.SEMI_ELLIPSE}
                  >
                      {t('AddCommentSendBtn')}
                  </Button>
              </div>
          </FullPageBlock>
      </DynamicModuleLoader>
  );
});

export default AddCommentForm;
