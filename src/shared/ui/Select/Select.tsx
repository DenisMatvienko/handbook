import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import classes from './Select.module.scss';

interface SelectProps {
  className?: string,
  label?: string,
}

export const Select = ({
  className,
  label,
}: SelectProps) => {
  const { t } = useTranslation();

  const mods: Mods = {};

  return (
      <div className={classNames(classes.SelectWrapper, mods)}>
          {label && (
          <div className={classes.label}>
              <Text
                  title={label}
                  theme={TextTheme.TEXT_WHITE}
              />
          </div>
          )}
          <select className={classes.select}>
              <option>123</option>
              <option>1234</option>
          </select>
      </div>
  );
};
