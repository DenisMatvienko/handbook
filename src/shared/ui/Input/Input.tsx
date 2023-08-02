/**
 *    Input ui-component
 *    @param HTMLInputProps
 *    - Omit for exclude from <InputHTMLAttributes<HTMLInputElement> to solve conflict with 'value',
 *      onChange types
 *
 *    - onChange? - with optional chaining, because props may not be transferred
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, {
  InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import classes from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

export enum InputTheme {
  SIMPLE = 'simpleInput',
}

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    placeholderTemplate?: string;
    theme?: InputTheme;
    autofocus?: boolean;
    onChange?: (value: string) => void;
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

  const mods: Record<string, boolean> = {
    [classes[theme]]: true,
  };

  return (
      <input
          className={classNames(classes.Input, mods, [className])}
          ref={ref}
          type={type}
          value={value}
          placeholder={placeholderTemplate}
          onChange={onChangeHandler}
          {...otherProps}
      />
  );
});
