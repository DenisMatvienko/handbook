/**
 *    @param onChangeHandler
 *      - TS config should automatically mapping enum to string;
 *        But it did not happen, that reason of error:
 *          "Type 'string' is not assignable to type 'Currency'."
 *        By this func do currency to string more obvious;
 *        Add 'item as Currency' cause know that enum contain just currency, and nothing more
 */

import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { Currency } from '../model/types/currency';

interface CurrencySelectProps {
  className?: string,
  value?: Currency
  label?: boolean,
  onChange?: (value: Currency) => void
}

const options = [
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
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const {
    className,
    label,
    value,
    onChange,
  } = props;

  const { t } = useTranslation('profile');

  const onChangeHandler = useCallback((item: string) => {
    onChange?.(item as Currency);
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
          label={t('currency')}
          options={options}
          onChange={onChangeHandler}
      />
  );
});
