import React from 'react';
import { customRender, screen } from '@utils/test-utils';
import { ThemeProvider } from '@context/ThemeContext';
import { Layout } from '@components/index';

describe('Layout', () => {
  test('renders the children with the correct theme class', () => {
    const theme = 'dark';
    const children = <div>Test Children</div>;

    const wrapper = customRender(
      <ThemeProvider value={{ theme }}>
        <Layout>{children}</Layout>
      </ThemeProvider>
    );

    const layout = screen.getByTestId('layout');
    const header = wrapper.container.getElementsByTagName('header');
    const renderedChildren = screen.getByText('Test Children');

    expect(layout).toHaveClass('layout dark');
    expect(header).toBeTruthy();
    expect(renderedChildren).toBeInTheDocument();
  });
});
