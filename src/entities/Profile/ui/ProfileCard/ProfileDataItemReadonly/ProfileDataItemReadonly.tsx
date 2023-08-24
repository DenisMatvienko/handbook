/**
 *  Profile data item readonly
 *    - Complex component which contain lists of:
 *      1) itemsList - title of data
 *      2) dataList - Profile data
 */

import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { useMemo } from 'react';
import { ProfileData, ProfileItem } from 'entities/Profile';
import { FullPageBlock } from 'shared/ui/Block/FullPageBlock/FullPageBlock';
import { HalfPageBlock } from 'shared/ui/Block/HalfPageBlock/HalfPageBlock';
import classes from './ProfileDataItemReadonly.module.scss';

interface ProfileDataItemReadonlyProps {
  className: string;
}

export const ProfileDataItemReadonly = (className: ProfileDataItemReadonlyProps) => {
  const profileItemList = ProfileItem();
  const profileDataList = ProfileData();

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
            key={value}
            title={`${value};`}
            theme={TextTheme.TEXT_WHITE}
            align={TextAlign.LEFT}
        />
    ))
  ), [profileDataList]);

  return (
      <div className={classes.dataWrapper}>
          <HalfPageBlock>
              <div>hello</div>
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
