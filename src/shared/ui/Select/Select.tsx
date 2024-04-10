/**
 *      Select
 *          - Select ui component
 *
 *       @param T
 *          Generic props for property 'value', that they could have multiple type.
 *          early value used to have type 'string'.
 *
 */

import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ChangeEvent, memo, useMemo } from 'react';
import classes from './Select.module.scss';

export interface SelectOption<T extends string> {
  value: T;
  content: string;
}

export enum SelectTheme {
  DEFAULT = 'select_default',
  FILTER = 'select_filter',
}

interface SelectProps<T extends string> {
  className?: string,
  label?: string,
  name?: string,
  theme?: SelectTheme,
  options?: SelectOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const {
    className,
    label,
    name,
    theme = SelectTheme.DEFAULT,
    options,
    value,
    onChange,
  } = props;

  const { t } = useTranslation();

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value as T);
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

  const mods: Mods = {
    [classes[theme]]: theme,
  };

  return (
      <div className={classNames(classes.select, mods, [])}>
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
              <option defaultValue={name} value={name} disabled>{name}</option>
              {optionsList}
          </select>
      </div>
  );
};
