import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { AppRouter } from '@router/index';
import { setupStore } from '@redux/store';

const RouterProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={setupStore()}>
      <MemoryRouter>
        <AppRouter />
        {children}
      </MemoryRouter>
    </Provider>
  );
};

const renderWithRouter = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: RouterProvider, ...options });

class LocalStorageMock {
  private store: { [key: string]: string };

  constructor() {
    this.store = {};
  }

  clear(): void {
    this.store = {};
  }

  getItem(key: string): string | null {
    return this.store[key] || null;
  }

  setItem(key: string, value: string): void {
    this.store[key] = String(value);
  }

  removeItem(key: string): void {
    delete this.store[key];
  }
}

export { renderWithRouter, LocalStorageMock };
