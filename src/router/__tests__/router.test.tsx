import React from 'react';
import { customRender, screen } from '@utils/tests';
import { AppRouter } from '@router/index';
import { MemoryRouter } from 'react-router-dom';

describe('Router', () => {
  test('Should open home page by default', () => {
    customRender(
      <MemoryRouter>
        <AppRouter />
      </MemoryRouter>
    );

    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });

  test('Should redirects to the error page, if route does not exist', () => {
    customRender(
      <MemoryRouter initialEntries={['/asfasfafasf']}>
        <AppRouter />
      </MemoryRouter>
    );

    expect(screen.getByTestId('error-page')).toBeInTheDocument();
  });
});
