import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader';
import {
  fetchProfileData,
  getProfileError, getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  profileActions,
  ProfileCard,
  profileReducer,
} from 'entities/Profile';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import classes from './ProfilePage.module.scss';

interface ProfilePageProps {
  className?: string;
}

const initialReducers: ReducerList = {
  profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);
  const regex = /[A-Za-z-]/g;

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ firstName: value || '' }));
  }, [dispatch]);

  const onChangeLastname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastName: value || '' }));
  }, [dispatch]);

  const onChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ age: Number(value?.match(regex) ? 0 : value || 0) }));
  }, [dispatch, regex]);

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value || '' }));
  }, [dispatch]);

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value || '' }));
  }, [dispatch]);

  return (
      <DynamicModuleLoader
          removeAfterUnmount
          reducers={initialReducers}
      >
          <div className={classNames(classes.ProfilePage, {}, [className])}>
              <ProfileCard
                  data={formData}
                  isLoading={isLoading}
                  error={error}
                  readonly={readonly}
                  onChangeFirstname={onChangeFirstname}
                  onChangeLastname={onChangeLastname}
                  onChangeAge={onChangeAge}
                  onChangeCity={onChangeCity}
                  onChangeUsername={onChangeUsername}
              />
          </div>
      </DynamicModuleLoader>
  );
};

export default ProfilePage;
