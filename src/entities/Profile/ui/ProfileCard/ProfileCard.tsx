import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { PageLoader } from 'widgets/PageLoader';

import { Input, InputTheme } from 'shared/ui/Input/Input';
import {
  ErrorPalette,
  ErrorPaletteSize,
  ErrorPaletteTheme,
} from 'shared/ui/ErrorPalette/ErrorPalette';
import {
  ProfileDataItemReadonly,
} from 'entities/Profile/ui/ProfileCard/ProfileDataItemReadonly/ProfileDataItemReadonly';
import { ProfilePageHeader } from 'pages/ProfilePage';
import { HalfPageBlock } from 'shared/ui/Block/HalfPageBlock/HalfPageBlock';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Select } from 'shared/ui/Select/Select';
import { City, Country } from 'shared/const/common';
import { Currency } from 'entities/Currency/model/types/currency';
import { Profile } from '../../model/type/profile';
import classes from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    error,
    isLoading,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
  } = props;

  const { t } = useTranslation('profile');

  const mods: Mods = {
    [classes.loading]: true,
  };

  if (isLoading) {
    return (
        <div className={classNames(classes.ProfileCard, mods, [className])}>
            <PageLoader />
        </div>
    );
  }

  if (error) {
    return (
        <div className={classNames(classes.ProfileCard, {}, [className])}>
            <ErrorPalette
                theme={ErrorPaletteTheme.DEFAULT}
                title={t('ProfileErrorTitle')}
                text={t('ProfileErrorText')}
                size={ErrorPaletteSize.XXL}
                refresh
            />
        </div>
    );
  }

  return (
      <div className={classNames(classes.ProfileCard, {}, [className])}>
          {readonly
            ? (
                <div>
                    <ProfilePageHeader />
                    <ProfileDataItemReadonly
                        data={data}
                        className={classes.data}
                    />
                </div>
            ) : (
                <div>
                    <ProfilePageHeader />
                    <div className={classes.dataWrapper}>
                        <HalfPageBlock>
                            <div className={classes.textWrapper}>
                                <Text
                                    title={t('Edit')}
                                    theme={TextTheme.TEXT_WHITE}
                                    align={TextAlign.LEFT}
                                />
                            </div>
                            <div className={classes.data}>
                                <div className={classes.dataInputs}>
                                    <Input
                                        label={t('Firstname')}
                                        className={classes.input}
                                        value={data?.firstName}
                                        theme={InputTheme.SIMPLE}
                                        placeholder={t('Firstname')}
                                        onChange={onChangeFirstname}
                                        readonly={readonly}
                                    />
                                    <Input
                                        label={t('Lastname')}
                                        className={classes.input}
                                        value={data?.lastName}
                                        theme={InputTheme.SIMPLE}
                                        placeholder={t('Lastname')}
                                        onChange={onChangeLastname}
                                        readonly={readonly}
                                    />
                                    <Input
                                        label={t('Age')}
                                        className={classes.input}
                                        value={data?.age}
                                        theme={InputTheme.SIMPLE}
                                        placeholder={t('Age')}
                                        onChange={onChangeAge}
                                        readonly={readonly}
                                    />
                                    <Input
                                        label={t('Username')}
                                        className={classes.input}
                                        value={data?.username}
                                        theme={InputTheme.SIMPLE}
                                        placeholder={t('Username')}
                                        onChange={onChangeUsername}
                                        readonly={readonly}
                                    />
                                    <Input
                                        label={t('Avatar')}
                                        className={classes.input}
                                        value={data?.avatar}
                                        theme={InputTheme.SIMPLE}
                                        placeholder={t('Avatar')}
                                        onChange={onChangeAvatar}
                                        readonly={readonly}
                                    />
                                    <div className={classes.selectWrapper}>
                                        <Select
                                          label={t('Country')}
                                          options={[
                                          {
                                            value: Country.Russia,
                                            content: Country.Russia,
                                          },
                                          {
                                            value: Country.Belorussian,
                                            content: Country.Belorussian,
                                          },
                                          {
                                            value: Country.China,
                                            content: Country.China,
                                          },
                                        ]}
                                      />
                                    </div>
                                    <div className={classes.selectWrapper}>
                                        <Select
                                          label={t('City')}
                                          options={[
                                          {
                                            value: City.SAINT_P,
                                            content: City.SAINT_P,
                                          },
                                          {
                                            value: City.MOSCOW,
                                            content: City.MOSCOW,
                                          },
                                          {
                                            value: City.SOCHI,
                                            content: City.SOCHI,
                                          },
                                        ]}
                                      />
                                    </div>
                                    <div className={classes.selectWrapper}>
                                        <Select
                                          label={t('Currency')}
                                          options={[
                                          {
                                            value: Currency.RUB,
                                            content: Currency.RUB,
                                          },
                                          {
                                            value: Currency.EUR,
                                            content: Currency.EUR,
                                          },
                                          {
                                            value: Currency.USD,
                                            content: Currency.USD,
                                          },
                                        ]}
                                      />
                                    </div>
                                </div>
                            </div>
                        </HalfPageBlock>
                    </div>
                </div>
            )}
      </div>
  );
};
