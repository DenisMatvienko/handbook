import { useTranslation } from 'react-i18next';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Button, ButtonRadius, ButtonTheme } from 'shared/ui/Button/Button';
import classes from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
  const {
    className,
  } = props;

  const { t } = useTranslation('profile');

  return (
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
  );
};
