import { useTranslation } from 'react-i18next';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Button, ButtonRadius, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { FullPageBlock } from 'shared/ui/Block/FullPageBlock/FullPageBlock';
import classes from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
  const {
    className,
  } = props;

  const { t } = useTranslation('profile');
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (

      <div className={classes.headerWrapper}>
          <FullPageBlock>
              <div className={classes.header}>
                  <Text
                      className={classes.titleText}
                      title={t('UserProfile')}
                      theme={TextTheme.TEXT_WHITE}
                  />
                  {readonly
                    ? (
                        <Button
                            className={classes.toEditButton}
                            theme={ButtonTheme.BACKGROUND_INVERTED}
                            radius={ButtonRadius.SEMI_ELLIPSE}
                            onClick={onEdit}
                        >
                            {t('Edit')}
                        </Button>
                    ) : (
                        <div className={classes.editButtons}>
                            <Button
                                className={classes.editButton}
                                theme={ButtonTheme.SAVE}
                                radius={ButtonRadius.SEMI_ELLIPSE}
                                onClick={onSave}
                            >
                                {t('Save')}
                            </Button>
                            <Button
                                className={classes.editButton}
                                theme={ButtonTheme.CANCEL}
                                radius={ButtonRadius.SEMI_ELLIPSE}
                                onClick={onCancelEdit}
                            >
                                {t('Cancel')}
                            </Button>
                        </div>
                    )}
              </div>
          </FullPageBlock>
      </div>
  );
};
