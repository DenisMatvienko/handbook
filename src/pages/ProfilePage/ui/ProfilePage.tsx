import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';
import classes from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string;
}

const initialReducers:ReducerList = {
  profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation();

  return (
      <DynamicModuleLoader
          removeAfterUnmount
          reducers={initialReducers}
      >
          <div className={classNames(classes.ProfilePage, {}, [className])}>
              <div>
                  {t('Profile page')}
              </div>
          </div>
      </DynamicModuleLoader>
  );
};

export default ProfilePage;
