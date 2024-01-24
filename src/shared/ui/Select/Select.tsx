import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ChangeEvent, memo, useMemo } from 'react';
import classes from './Select.module.scss';

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string,
  label?: string,
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
}

export const Select = memo((props: SelectProps) => {
  const {
    className,
    label,
    options,
    value,
    onChange,
  } = props;

  const { t } = useTranslation();

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const optionsList = useMemo(() => options?.map((item) => (
      <option
          className={classes.select__option}
          value={item.value}
          key={item.value}
      >
          {item.content}
      </option>
  )), [options]);

  const mods: Mods = {};

  return (
      <div className={classNames(classes.select, mods)}>
          {label && (
          <div className={classes.select__label}>
              <Text
                  text={label}
                  theme={TextTheme.SECONDARY_INVERTED}
              />
          </div>
          )}
          <select
              value={value}
              className={classes.select__wrapper}
              onChange={onChangeHandler}
          >
              {optionsList}
          </select>
      </div>
  );
});
