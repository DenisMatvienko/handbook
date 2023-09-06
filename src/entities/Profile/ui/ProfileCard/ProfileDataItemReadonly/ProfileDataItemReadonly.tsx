/**
 *  Profile data item readonly
 *    - Complex component which contain lists of:
 *      1) itemsList - title of data
 *      2) dataList - data of Profile
 */

import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { useMemo } from 'react';
import { Profile, ProfileData, ProfileItem } from 'entities/Profile';
import { HalfPageBlock } from 'shared/ui/Block/HalfPageBlock/HalfPageBlock';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { Avatar, AvatarSize } from 'shared/ui/Avatar/Avatar';
import { useTranslation } from 'react-i18next';
import classes from './ProfileDataItemReadonly.module.scss';

interface ProfileDataItemReadonlyProps {
  className: string;
  data?: Profile;
}

export const ProfileDataItemReadonly = ({
  className,
  data,
}: ProfileDataItemReadonlyProps) => {
  const { t } = useTranslation('profile');
  const profileItemList = ProfileItem();
  const profileDataList = ProfileData();
  const authDate = useSelector(getUserAuthData);

  const itemsList = useMemo(() => profileItemList
    .map((item) => (
        <Text
            key={item.profileId}
            title={`${item.title}: `}
            theme={TextTheme.TEXT_BLACK}
            align={TextAlign.LEFT}
        />
    )), [profileItemList]);

  const dataList = useMemo(() => (Object.entries(profileDataList)
    .map(([key, value]) => (
        <Text
            key={key.toString()}
            title={`${value || '-'}`}
            theme={TextTheme.TEXT_BLACK}
            align={TextAlign.LEFT}
        />
    ))
  ), [profileDataList]);

  return (
      <div className={classes.dataWrapper}>
          <HalfPageBlock>
              <div className={classes.blockUserWrapper}>
                  <div className={classes.blockUser}>
                      <Text
                          title={`${t('hi')}, ${authDate?.username}`}
                          theme={TextTheme.TEXT_BLACK}
                      />
                      <div className={classes.dataAvatar}>
                          <Avatar
                              size={AvatarSize.XL}
                              src={data?.avatar}
                              alt={data?.username}
                          />
                      </div>
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
