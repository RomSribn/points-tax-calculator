import React from 'react';
import userEvent from '@testing-library/user-event';
import { customRender, screen } from '@utils/test-utils';
import { Header } from '@components/index';
import { ThemeProvider } from '@context/ThemeContext';

describe('Header', () => {
  test('Should renders the component correctly', () => {
    const wrapper = customRender(<Header />);

    // Assert that the header is rendered
    expect(screen.getByRole('banner')).not.toBeNull();
    expect(screen.getByRole('button', { name: 'Toggle navigation' })).not.toBeNull();
    expect(screen.getByRole('navigation')).not.toBeNull();

    expect(wrapper).toMatchSnapshot();
  });

  test('Should toggles the theme when the button is clicked', () => {
    const updateThemeMock = jest.fn();
    const theme = 'light';

    customRender(
      <ThemeProvider value={{ theme, updateTheme: updateThemeMock }}>
        <Header />
      </ThemeProvider>
    );

    // Mock the updateTheme function from the ThemeContext
    const useContextSpy = jest.spyOn(React, 'useContext');
    useContextSpy.mockReturnValue({ theme, updateTheme: updateThemeMock });

    const button = screen.getByTestId('darkTheme');

    // Assert that the initial theme is 'dark'
    expect(button).not.toBeNull();
    expect(screen.getByTestId('moon-icon')).not.toBeNull();

    // Simulate clicking the button to toggle the theme
    userEvent.click(button);

    // Assert that the updateTheme function is called
    expect(updateThemeMock).toHaveBeenCalled();
  });
});
