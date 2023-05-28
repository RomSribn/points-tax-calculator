import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider, defaultState } from '@context/ThemeContext';
import { setupStore } from '@redux/store';

import '@testing-library/jest-dom';

const store = setupStore();

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeProvider value={defaultState}>{children}</ThemeProvider>
    </Provider>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AppProvider, ...options });

export * from '@testing-library/react';
export { customRender };
