import { useTranslation } from 'react-i18next';
import { getProfileData, Profile } from 'entities/Profile';
import { useSelector } from 'react-redux';

/**
 *    Profile Items
 *      - List of items, titles for data in Profile
 *
 *    Profile Data
 *      - List of data, which need to view on Profile card
 *
 *
 *    Type of sidebar items
 *    @param id
 *      - id of profile properties
 *    @param title
 *      - name of profile properties
 */

export interface ProfileItemType {
  title: string;
}

type ProfileDataType = Omit<Profile, 'id'>;

export const ProfileItem = () => {
  const { t } = useTranslation('profile');

  const ProfileItemsList: ProfileItemType[] = [
    {
      title: t('Firstname'),
    },
    {
      title: t('Lastname'),

    },
    {
      title: t('age'),
    },
    {
      title: t('currency'),
    },
    {
      title: t('country'),

    },
    {
      title: t('city'),
    },
    {
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
