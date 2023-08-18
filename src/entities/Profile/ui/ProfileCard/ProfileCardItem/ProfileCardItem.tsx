import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { ProfileItemType } from '../../../model/items/items';

interface ProfileCardItemProps {
  item: ProfileItemType;
}

export const ProfileCardItem = ({
  item,
}: ProfileCardItemProps) => {
  const { t } = useTranslation();

  return (
      <div>
          <Text
              key={item.profileId}
              title={`${item.title}: `}
              theme={TextTheme.PRIMARY}
              align={TextAlign.LEFT}
          />
      </div>
  );
};
