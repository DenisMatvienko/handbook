import { useTranslation } from 'react-i18next';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Button, ButtonRadius, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions } from 'entities/Profile';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
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
    dispatch(profileActions.setReadonly(true));
  }, [dispatch]);

  return (
      <div className={classes.header}>
          <Text
              title={t('UserProfile')}
              theme={TextTheme.PRIMARY}
          />
          {readonly
            ? (
                <Button
                    className={classes.editButton}
                    theme={ButtonTheme.BACKGROUND_WT_B_BT_P}
                    radius={ButtonRadius.SEMI_ELLIPSE}
                    onClick={onEdit}
                >
                    {t('Edit')}
                </Button>
            ) : (
                <Button
                    className={classes.editButton}
                    theme={ButtonTheme.CANCEL}
                    radius={ButtonRadius.SEMI_ELLIPSE}
                    onClick={onCancelEdit}
                >
                    {t('Cancel')}
                </Button>
            )}
      </div>
  );
};
