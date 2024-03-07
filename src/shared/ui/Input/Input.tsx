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
import SearchIcon from 'shared/assets/icons/search/search.svg';
import ClearIcon from 'shared/assets/icons/search/clear.svg';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import { Button, ButtonRadius, ButtonTheme } from 'shared/ui/Button/Button';
import classes from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

export enum InputTheme {
  SIMPLE = 'input_default',
  NAVBAR_SEARCH = 'input_navbar-search'
}

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  placeholderTemplate?: string;
  onChange?: (value: string) => void;
  theme?: InputTheme;
  label?: string;
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
    ref.current?.focus();
  };

  const onClearHandler = () => {
    if (ref.current != null) {
      ref.current.value = '';
    }
  };

  const mods: Mods = {
    [classes[theme]]: true,
    [classes.input_readonly]: readonly,
  };

  return (
      <div className={classNames(classes.input, {}, [className])}>
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
          { theme === InputTheme.NAVBAR_SEARCH
            && (
            <div>
                <Icon
                    className={classes.input__searchIcon}
                    Svg={SearchIcon}
                    theme={IconTheme.BLOCK_ICON}
                />
                { ref.current?.value
                  && (
                  <Button
                      theme={ButtonTheme.CLEAR}
                      radius={ButtonRadius.ELLIPSE}
                      onClick={onClearHandler}
                  >
                      <Icon
                          className={classes.input__clearIcon}
                          Svg={ClearIcon}
                          theme={IconTheme.BLOCK_ICON}
                      />
                  </Button>
                  )}
            </div>
            )}
      </div>
  );
});
