import React from 'react';
import { TTheme } from '@utils/interfaces';

type TodoContextType = {
  theme: TTheme;
  updateTheme?: () => void;
};

const defaultState: { theme: TTheme } = {
  theme: 'dark'
};

const ThemeContext: React.Context<TodoContextType> = React.createContext(defaultState);
const ThemeProvider = ThemeContext.Provider;
const ThemeConsumer = ThemeContext.Consumer;

export { ThemeContext, ThemeProvider, ThemeConsumer };
