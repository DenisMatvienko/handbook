import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader';
import { fetchProfileData, profileReducer, ProfileCard } from 'entities/Profile';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import classes from './ProfilePage.module.scss';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import {
  getProfileIsLoading
} from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';

interface ProfilePageProps {
    className?: string;
}

const initialReducers:ReducerList = {
  profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
      <DynamicModuleLoader
          removeAfterUnmount
          reducers={initialReducers}
      >
          <div className={classNames(classes.ProfilePage, {}, [className])}>
              <ProfileCard />
          </div>
      </DynamicModuleLoader>
  );
};

export default ProfilePage;
