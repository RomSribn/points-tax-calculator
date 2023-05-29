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

export { renderWithRouter };
