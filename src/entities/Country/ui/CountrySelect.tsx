import { useTranslation } from 'react-i18next';
import { Country } from 'entities/Country';
import { Select } from 'shared/ui/Select/Select';
import { useCallback } from 'react';

interface CountrySelectProps {
  className?: string,
  value?: Country,
  label?: boolean,
  onChange?: (value: Country) => void
}

const options = [
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
];

export const CountrySelect = (props: CountrySelectProps) => {
  const {
    className,
    value,
    label,
    onChange,
  } = props;
  const { t } = useTranslation();

  const onChangeHandler = useCallback((item: string) => {
    onChange?.(item as Country);
  }, [onChange]);

  if (!label) {
    return (
        <Select
            options={options}
            onChange={onChangeHandler}
        />
    );
  }

  return (
      <Select
          label={t('Country')}
          options={options}
          onChange={onChangeHandler}
      />
  );
};
