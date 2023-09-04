/**
 *    Profile card
 *     - Card which displayed on profile page using state by async reducers of DynamycModuleLoader
 *
 *    @param ProfileDataItemReadonly
 *     include:
 *     - List of data elements;
 *     - List of items (values of data) elements;
 *     Both lists includes into wrap and push to the profile card when state readonly = true
 */

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
import { CurrencySelect } from 'entities/Currency/ui/CurrencySelect';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country/model/types/country';
import { CountrySelect } from 'entities/Country/ui/CountrySelect';
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
  onChangeCountry?: (country: Country) => void;
  onChangeCity?: (city?: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
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
    onChangeCountry,
    onChangeCity,
    onChangeCurrency,
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

  if (readonly) {
    return (
        <div>
            <ProfilePageHeader />
            <ProfileDataItemReadonly
                data={data}
                className={classes.data}
            />
        </div>
    );
  }

  return (
      <div className={classNames(classes.ProfileCard, {}, [className])}>
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
                                  label={t('age')}
                                  className={classes.input}
                                  value={data?.age}
                                  theme={InputTheme.SIMPLE}
                                  placeholder={t('age')}
                                  onChange={onChangeAge}
                                  readonly={readonly}
                              />
                              <Input
                                  label={t('username')}
                                  className={classes.input}
                                  value={data?.username}
                                  theme={InputTheme.SIMPLE}
                                  placeholder={t('username')}
                                  onChange={onChangeUsername}
                                  readonly={readonly}
                              />
                              <Input
                                  label={t('avatar')}
                                  className={classes.input}
                                  value={data?.avatar}
                                  theme={InputTheme.SIMPLE}
                                  placeholder={t('avatar')}
                                  onChange={onChangeAvatar}
                                  readonly={readonly}
                              />
                              <div className={classes.selectWrapper}>
                                  <CountrySelect
                                      value={data?.country}
                                      onChange={onChangeCountry}
                                      label
                                  />
                              </div>
                              <Input
                                  label={t('city')}
                                  className={classes.input}
                                  value={data?.city}
                                  theme={InputTheme.SIMPLE}
                                  placeholder={t('city')}
                                  onChange={onChangeCity}
                                  readonly={readonly}
                              />
                              <div className={classes.selectWrapper}>
                                  <CurrencySelect
                                      value={data?.currency}
                                      onChange={onChangeCurrency}
                                      label
                                  />
                              </div>
                          </div>
                      </div>
                  </HalfPageBlock>
              </div>
          </div>
      </div>
  );
};
