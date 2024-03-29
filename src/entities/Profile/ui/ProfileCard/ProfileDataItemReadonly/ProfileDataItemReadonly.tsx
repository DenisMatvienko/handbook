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
import { uid } from 'shared/lib/uid/uid';
import classes from './ProfileDataItemReadonly.module.scss';

interface ProfileDataItemReadonlyProps {
  className?: string;
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

  const itemsList = useMemo(() => profileItemList
    .map((item) => (
        <Text
            key={uid()}
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
      <div className={classes.profileDataItemReadonly}>
          <FullPageBlock className={classes.profileDataItemReadonly__wrapper}>
              <div className={classes.profileDataItemReadonly__user}>
                  <div className={classes.profileDataItemReadonly__data}>
                      <Text
                          title={`${t('hi')}, ${formData?.firstName}`}
                          theme={TextTheme.SECONDARY_INVERTED}
                      />
                      <div className={classes.profileDataItemReadonly__avatar}>
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
              className={classes.profileDataItemReadonly__wrapper}
          >
              <div className={classes.profileDataItemReadonly__readonly}>
                  <div className={classes.profileDataItemReadonly__title}>{itemsList}</div>
                  <div className={classes.profileDataItemReadonly__name}>
                      {dataList}
                  </div>
              </div>
          </FullPageBlock>
      </div>
  );
};
