import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { PageLoader } from 'widgets/PageLoader';

import { Input, InputTheme } from 'shared/ui/Input/Input';
import {
  ErrorPalette,
  ErrorPaletteSize,
  ErrorPaletteTheme,
} from 'shared/ui/ErrorPalette/ErrorPalette';
import { ProfilePageHeader } from 'pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader';
import classes from './ProfileCard.module.scss';
import { Profile } from '../../model/type/profile';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    error,
    isLoading,
    readonly,
  } = props;

  const { t } = useTranslation('profile');

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
          <ProfilePageHeader />
          <div className={classes.data}>
              <Input
                  className={classes.input}
                  value={data?.firstName}
                  theme={InputTheme.SIMPLE}
                  placeholder={t('Firstname')}
              />
              <Input
                  className={classes.input}
                  value={data?.lastName}
                  theme={InputTheme.SIMPLE}
                  placeholder={t('Lastname')}
              />
          </div>
      </div>
  );
};
