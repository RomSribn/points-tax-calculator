import React from 'react';
import { TTheme } from '@utils/interfaces';

type ThemeContextType = {
  /**
   * 'dark' | 'light'.
   */
  theme: TTheme;
  /**
   * theme updating handler
   */
  updateTheme?: () => void;
};

const defaultState: { theme: TTheme } = {
  theme: 'dark'
};

const ThemeContext: React.Context<ThemeContextType> = React.createContext(defaultState);
const ThemeProvider = ThemeContext.Provider;
/**
 * Consumer for theme contexts providing.
 * @param {ThemeContextType['theme']} theme 'dark' | 'light'.
 * @param {ThemeContextType['updateTheme']} updateTheme theme updating handler.
 */
const ThemeConsumer = ThemeContext.Consumer;

export { ThemeContext, ThemeProvider, ThemeConsumer, defaultState };
