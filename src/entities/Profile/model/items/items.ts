import { useTranslation } from 'react-i18next';
import { getProfileData, Profile } from 'entities/Profile';
import { useSelector } from 'react-redux';

/**
 *  Profile Items
 *    - List of items, titles for data in Profile
 *
 *  Profile Data
 *    - List of data, which need to view on Profile card
 *
 *
 * Type of sidebar items
 *  @param id
 *  - id of profile properties
 *  @param title
 *  - name of profile properties
 */

export interface ProfileItemType {
  profileId: number;
  title: string;
}

type ProfileDataType = Omit<Profile, 'id'>;

export const ProfileItem = () => {
  const { t } = useTranslation('profile');

  const ProfileItemsList: ProfileItemType[] = [
    {
      profileId: 1,
      title: t('Firstname'),
    },
    {
      profileId: 2,
      title: t('Lastname'),

    },
    {
      profileId: 3,
      title: t('age'),
    },
    {
      profileId: 4,
      title: t('currency'),
    },
    {
      profileId: 5,
      title: t('country'),

    },
    {
      profileId: 6,
      title: t('city'),
    },
    {
      profileId: 7,
      title: t('username'),
    },
  ];

  return ProfileItemsList;
};

export const ProfileData = () => {
  const data = useSelector(getProfileData);
  const ProfileDataList: ProfileDataType = {
    firstName: data?.firstName,
    lastName: data?.lastName,
    age: data?.age,
    currency: data?.currency,
    country: data?.country,
    city: data?.city,
    username: data?.username,
  };

  return ProfileDataList;
};
