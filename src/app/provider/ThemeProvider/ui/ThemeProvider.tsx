/**
 *     Wrap components which get theme
 *      - If wrap App of this provider, we will have access to
 *        any themes, from other components and points
 *        We are encapsulate theme state on provider level, from App
 *
 *      - If local storage is empty, value of theme default will be LIGHT
 *
 *      @param useMemo
 *      - Every time ThemeContext.Provider - theme rendered, for that we will use useMemo
 */

import React, { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Theme }
  from '../lib/ThemeContext';

const defaultTheme = localStorage
  .getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
  initialTheme?: Theme;
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const {
    initialTheme,
    children,
  } = props;

  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  return (
      <ThemeContext.Provider value={defaultProps}>
          {children}
      </ThemeContext.Provider>
  );
};

export default ThemeProvider;
