/**
 *  Profile data item readonly
 *    - Complex component which contain lists of:
 *      1) itemsList - title of data
 *      2) dataList - data of Profile
 */

import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { useMemo } from 'react';
import {
  getProfileForm, Profile, ProfileData, ProfileItem,
} from 'entities/Profile';
import { HalfPageBlock } from 'shared/ui/Block/HalfPageBlock/HalfPageBlock';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { Avatar, AvatarSize } from 'shared/ui/Avatar/Avatar';
import { useTranslation } from 'react-i18next';
import { FullPageBlock } from 'shared/ui/Block/FullPageBlock/FullPageBlock';
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
  const formData = useSelector(getProfileForm);
  const authDate = useSelector(getUserAuthData);

  const itemsList = useMemo(() => profileItemList
    .map((item) => (
        <Text
            key={item.profileId}
            text={`${item.title}: `}
            theme={TextTheme.SECONDARY_INVERTED}
            align={TextAlign.LEFT}
        />
    )), [profileItemList]);

  const dataList = useMemo(() => (Object.entries(profileDataList)
    .map(([key, value]) => (
        <Text
            key={key.toString()}
            text={`${value || '-'}`}
            theme={TextTheme.SECONDARY_INVERTED}
            align={TextAlign.LEFT}
        />
    ))
  ), [profileDataList]);

  return (
      <div className={classes.dataWrapper}>
          <FullPageBlock className={classes.blockWrapper}>
              <div className={classes.blockUserWrapper}>
                  <div className={classes.blockUser}>
                      <Text
                          title={`${t('hi')}, 
                          ${formData?.user?.username ? formData?.user.username : `Лунтик #${formData?.profileId}`}`}
                          theme={TextTheme.SECONDARY_INVERTED}
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
          </FullPageBlock>
          <FullPageBlock
              className={classes.blockWrapper}
          >
              <div className={classes.dataReadonly}>
                  <div className={classes.title}>{itemsList}</div>
                  <div className={classes.titleName}>
                      {dataList}
                  </div>
              </div>
          </FullPageBlock>
      </div>
  );
};
