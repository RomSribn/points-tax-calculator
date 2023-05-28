import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider, defaultState } from '@context/ThemeContext';
import '@testing-library/jest-dom';

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider value={defaultState}>{children}</ThemeProvider>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AppProvider, ...options });

export * from '@testing-library/react';
export { customRender };
