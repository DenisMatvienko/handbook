import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Button, ButtonRadius, ButtonTheme } from 'shared/ui/Button/Button';
import { PageLoader } from 'widgets/PageLoader';

import { Input, InputTheme } from 'shared/ui/Input/Input';
import {
  ErrorPalette,
  ErrorPaletteSize,
  ErrorPaletteTheme,
} from 'shared/ui/ErrorPalette/ErrorPalette';
import classes from './ProfileCard.module.scss';
import { Profile } from '../../model/type/profile';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    error,
    isLoading,
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
          <div className={classes.header}>
              <Text
                  title={t('UserProfile')}
                  theme={TextTheme.PRIMARY}
              />
              <Button
                  className={classes.editButton}
                  theme={ButtonTheme.BACKGROUND_WT_B_BT_P}
                  radius={ButtonRadius.SEMI_ELLIPSE}
              >
                  {t('Edit')}
              </Button>
          </div>
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
