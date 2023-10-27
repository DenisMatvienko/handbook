/**
 *    Tag-component.
 *      - Provider for tags
 */

import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import {
  Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import classes from './Tag.module.scss';

export enum TagTheme {
    DEFAULT = 'default',
}

interface TagProps {
    className?: string;
    data?: string;
    theme?: TagTheme;
}

export const Tag = memo((props: TagProps) => {
  const {
    className,
    data,
    theme = TagTheme.DEFAULT,
  } = props;
  const { t } = useTranslation();

  const mods: Mods = {
    [classes[theme]]: true,
  };

  return (
      <div className={classNames(classes.Tag, mods)}>
          <Text
              theme={TextTheme.TEXT_WHITE}
              text={data}
              align={TextAlign.LEFT}
              size={TextSize.S}
          />
      </div>
  );
});
