import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { PageLoader } from 'widgets/PageLoader';

import { Input, InputTheme } from 'shared/ui/Input/Input';
import {
  ErrorPalette,
  ErrorPaletteSize,
  ErrorPaletteTheme,
} from 'shared/ui/ErrorPalette/ErrorPalette';
import { useEffect } from 'react';
import { fetchProfileData } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  ProfileDataItemReadonly,
} from 'entities/Profile/ui/ProfileCard/ProfileDataItemReadonly/ProfileDataItemReadonly';
import { ProfilePageHeader } from 'pages/ProfilePage';
import { Profile } from '../../model/type/profile';
import classes from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    error,
    isLoading,
    readonly,
    onChangeFirstname,
    onChangeLastname,
  } = props;

  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const isCardEditable = !readonly;

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const mods: Mods = {
    [classes.loading]: true,
  };

  if (isLoading) {
    return (
        <div className={classNames(classes.ProfileCard, mods, [className])}>
            <PageLoader />
        </div>
    );
  }

  if (error) {
    return (
        <div className={classNames(classes.ProfileCard, {}, [className])}>
            <ErrorPalette
                theme={ErrorPaletteTheme.DEFAULT}
                title={t('ProfileErrorTitle')}
                text={t('ProfileErrorText')}
                size={ErrorPaletteSize.XXL}
                refresh
            />
        </div>
    );
  }

  return (
      <div className={classNames(classes.ProfileCard, {}, [className])}>
          {readonly
            ? (
                <div>
                    <ProfilePageHeader />
                    <ProfileDataItemReadonly />
                </div>
            ) : (
                <div>
                    <ProfilePageHeader />
                    <div className={classes.data}>
                        <Input
                            className={classes.input}
                            value={data?.firstName}
                            theme={InputTheme.SIMPLE}
                            placeholder={t('Firstname')}
                            onChange={onChangeFirstname}
                            readonly={readonly}
                        />
                        <Input
                            className={classes.input}
                            value={data?.lastName}
                            theme={InputTheme.SIMPLE}
                            placeholder={t('Lastname')}
                            onChange={onChangeLastname}
                            readonly={readonly}
                        />
                    </div>
                </div>
            )}
      </div>
  );
};
