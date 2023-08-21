import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { useMemo } from 'react';
import { Profile } from '../../../model/type/profile';
import classes from './ProfileDataItemReadonly.module.scss';
import { ProfileData, ProfileItem } from '../../../model/items/items';

export const ProfileDataItemReadonly = () => {
  const items = ProfileItem();
  const profileDataList = ProfileData();

  const itemsList = useMemo(() => items
    .map((item) => (
        <Text
            key={item.profileId}
            title={`${item.title}: `}
            theme={TextTheme.PRIMARY}
            align={TextAlign.LEFT}
        />
    )), [items]);

  const dataList = useMemo(() => (Object.entries(profileDataList)
    .map(([key, value]) => (
        <Text
            key={value.toString()}
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
