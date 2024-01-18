/**
 *  Profile page header
 *    - Profile page pallet, which include buttons of 'edit', 'save' and 'cancel'
 */

import { useTranslation } from 'react-i18next';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Button, ButtonRadius, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import {
  getProfileData, getProfileReadonly, profileActions, updateProfileData,
} from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { FullPageBlock } from 'shared/ui/Block/FullPageBlock/FullPageBlock';
import Save from 'shared/assets/icons/save-filled.svg';
import Cancel from 'shared/assets/icons/cancel.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import Settings from 'shared/assets/icons/settings.svg';
import { useParams } from 'react-router-dom';
import { getUserAuthData } from 'entities/User';
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
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    if (id) {
      dispatch(updateProfileData(id));
    }
  }, [id, dispatch]);

  return (

      <div className={classes.profilePageHeader}>
          {canEdit && (
          <FullPageBlock>
              <div className={classes.profilePageHeader__header}>
                  <Text
                      className={classes.profilePageHeader__title}
                      title={t('UserProfile')}
                      theme={TextTheme.BLOCK_TEXT}
                  />
                  {readonly
                    ? (
                        <Button
                            className={classes.profilePageHeader__readonlyBtn}
                            theme={ButtonTheme.BACKGROUND_BLOCK}
                            radius={ButtonRadius.SEMI_ELLIPSE}
                            onClick={onEdit}
                        >
                            <Settings className={classNames(classes.profilePageHeader__readonlyIcons, {}, [])} />
                        </Button>
                    ) : (
                        <div className={classes.profilePageHeader__editNav}>
                            <Button
                                className={classes.profilePageHeader__editBtn}
                                theme={ButtonTheme.BACKGROUND_BLOCK}
                                radius={ButtonRadius.SEMI_ELLIPSE}
                                onClick={onSave}
                            >
                                <Save className={classNames(classes.profilePageHeader__saveIcon, {}, [])} />
                            </Button>
                            <Button
                                className={classes.profilePageHeader__editBtn}
                                theme={ButtonTheme.BACKGROUND_BLOCK}
                                radius={ButtonRadius.SEMI_ELLIPSE}
                                onClick={onCancelEdit}
                            >
                                <Cancel className={classNames(classes.profilePageHeader__cancelIcon, {}, [])} />
                            </Button>
                        </div>
                    )}
              </div>
          </FullPageBlock>
          )}
      </div>
  );
};
