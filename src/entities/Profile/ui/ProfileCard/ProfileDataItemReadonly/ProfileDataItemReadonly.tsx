/**
 *  Profile data item readonly
 *    - Complex component which contain lists of:
 *      1) itemsList - title of data
 *      2) dataList - Profile data
 */

import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { useEffect, useMemo } from 'react';
import {
  fetchProfileData,
  getProfileData, Profile, ProfileData, ProfileItem,
} from 'entities/Profile';
import { useSelector } from 'react-redux';
import classes from './ProfileDataItemReadonly.module.scss';

export const ProfileDataItemReadonly = () => {
  const profileItemList = ProfileItem();
  const profileDataList = ProfileData();

  const itemsList = useMemo(() => profileItemList
    .map((item) => (
        <Text
            key={item.profileId}
            title={`${item.title}: `}
            theme={TextTheme.PRIMARY}
            align={TextAlign.LEFT}
        />
    )), [profileItemList]);

  const dataList = useMemo(() => (Object.entries(profileDataList)
    .map(([key, value]) => (
        <Text
            key={value}
            title={`${value};`}
            theme={TextTheme.PRIMARY}
            align={TextAlign.LEFT}
        />
    ))
  ), [profileDataList]);

  return (
      <div className={classes.dataReadonly}>
          <div className={classes.title}>{itemsList}</div>
          <div className={classes.titleName}>
              {dataList}
          </div>
      </div>
  );
};
