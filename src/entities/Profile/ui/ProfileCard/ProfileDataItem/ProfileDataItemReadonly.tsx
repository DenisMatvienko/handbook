import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Profile } from 'entities/Profile';
import { useMemo } from 'react';
import classes from './ProfileDataItemReadonly.module.scss';
import { ProfileCardItem } from '../ProfileCardItem/ProfileCardItem';
import { ProfileItemsList, ProfileItemType } from '../../../model/items/items';

interface ProfileDataItemItemProps {
  item?: Profile;
}

export const ProfileDataItemReadonly = ({
  item,
}: ProfileDataItemItemProps) => {
  const { t } = useTranslation();

  const itemsList = useMemo(() => ProfileItemsList.map((item) => (
      <ProfileCardItem
          item={item}
          key={item.profileId}
      />
  )), []);

  const dataList = useMemo(() => Object.entries(item || {})
    .map(([key, value], index) => (
        <Text
            key={value.toString()}
            title={`${value}`}
            theme={TextTheme.PRIMARY}
            align={TextAlign.LEFT}
        />
    )), [item]);

  return (
      <div className={classes.dataReadonly}>
          <div className={classes.title}>{itemsList}</div>
          <div className={classes.titleName}>
              {dataList}
          </div>
      </div>
  );
};
