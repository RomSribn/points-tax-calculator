import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from '@router/index';
import { loadFromLocalStorage } from '@utils/localStorage';
import { ThemeProvider } from '@context/ThemeContext';
import { TTheme } from '@utils/interfaces';

const App: React.FC = () => {
  const [theme, setTheme] = useState<TTheme>(() => loadFromLocalStorage('theme') || 'light');

  const handleThemeSwitch = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <BrowserRouter>
      <ThemeProvider
        value={{
          theme,
          updateTheme: handleThemeSwitch
        }}>
        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
