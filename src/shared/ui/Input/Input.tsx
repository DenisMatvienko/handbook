/**
 *    Input ui-component
 *    @param HTMLInputProps
 *    - Omit for exclude from <InputHTMLAttributes<HTMLInputElement> to solve conflict with 'value',
 *      onChange types
 *
 *    - onChange? - with optional chaining, because props may not be transferred
 */

import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, {
  InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import classes from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

export enum InputTheme {
  SIMPLE = 'label__default',
  SEARCH_NAV = 'input__search-nav'
}

export enum LabelPosition {
  TOP = 'input__label_top',
  LEFT = 'input__label_left',
}

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  placeholderTemplate?: string;
  onChange?: (value: string) => void;
  theme?: InputTheme;
  label?: string;
  labelPosition?: LabelPosition;
  autofocus?: boolean;
  readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholderTemplate,
    theme = InputTheme.SIMPLE,
    autofocus,
    readonly,
    label,
    labelPosition = LabelPosition.TOP,
    ...otherProps
  } = props;

  const { t } = useTranslation();
  const ref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const wrapperMods: Mods = {
    [classes[labelPosition]]: true,
  };

  const mods: Mods = {
    [classes[theme]]: true,
    [classes.input_readonly]: readonly,
  };

  return (
      <div className={classNames(classes.input, wrapperMods, [className])}>
          {label && (
          <div className={classes.input__label}>
              <Text
                  text={label}
                  theme={TextTheme.SECONDARY_INVERTED}
              />
          </div>
          )}
          <input
              className={classNames(classes.input__wrapper, mods, [className])}
              ref={ref}
              type={type}
              value={value}
              placeholder={placeholderTemplate}
              onChange={onChangeHandler}
              {...otherProps}
          />
      </div>
  );
});
