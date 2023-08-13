import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Button, ButtonRadius, ButtonTheme } from 'shared/ui/Button/Button';

import { Input, InputTheme } from 'shared/ui/Input/Input';
import classes from './ProfileCard.module.scss';
import { Profile } from '../../model/type/profile';

interface ProfileCardProps {
    className?: string;
    data?: Profile
}

export const ProfileCard = ({ className, data }: ProfileCardProps) => {
  const { t } = useTranslation('profile');

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
