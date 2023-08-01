import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Button, ButtonRadius, ButtonTheme } from 'shared/ui/Button/Button';

import { Input, InputTheme } from 'shared/ui/Input/Input';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import {
  getProfileIsLoading,
} from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import classes from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation('profile');
  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);

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
