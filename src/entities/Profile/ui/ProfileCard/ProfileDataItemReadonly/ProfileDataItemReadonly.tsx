/**
 *  Profile data item readonly
 *    - Complex component which contain lists of:
 *      1) itemsList - title of data
 *      2) dataList - Profile data
 */

import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { useMemo } from 'react';
import { getProfileData, ProfileData, ProfileItem } from 'entities/Profile';
import { HalfPageBlock } from 'shared/ui/Block/HalfPageBlock/HalfPageBlock';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { Avatar, AvatarSize } from 'shared/ui/Avatar/Avatar';
import classes from './ProfileDataItemReadonly.module.scss';

interface ProfileDataItemReadonlyProps {
  className: string;
}

export const ProfileDataItemReadonly = (className: ProfileDataItemReadonlyProps) => {
  const profileItemList = ProfileItem();
  const profileDataList = ProfileData();
  const authDate = useSelector(getUserAuthData);
  const data = useSelector(getProfileData);

  const itemsList = useMemo(() => profileItemList
    .map((item) => (
        <Text
            key={item.profileId}
            title={`${item.title}: `}
            theme={TextTheme.TEXT_WHITE}
            align={TextAlign.LEFT}
        />
    )), [profileItemList]);

  const dataList = useMemo(() => (Object.entries(profileDataList)
    .map(([key, value]) => (
        <Text
            key={key.toString()}
            title={`${value};`}
            theme={TextTheme.TEXT_WHITE}
            align={TextAlign.LEFT}
        />
    ))
  ), [profileDataList]);

  return (
      <div className={classes.dataWrapper}>
          <HalfPageBlock>
              <div className={classes.blockUser}>
                  <Text
                      title={`Hi, ${authDate?.username}`}
                      theme={TextTheme.TEXT_WHITE}
                  />
                  <div className={classes.dataAvatar}>
                      <Avatar
                          size={AvatarSize.XL}
                      />
                  </div>
              </div>
          </HalfPageBlock>
          <HalfPageBlock>
              <div className={classes.dataReadonly}>
                  <div className={classes.title}>{itemsList}</div>
                  <div className={classes.titleName}>
                      {dataList}
                  </div>
              </div>
          </HalfPageBlock>
      </div>
  );
};
