import React from 'react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter, screen } from '@utils/tests';
import { NotFound } from '@pages/index';

describe('Notfound component', () => {
  test('Should renders the error message and link', () => {
    renderWithRouter(<NotFound />);
    // Assert that the link is rendered
    const linkElement = screen.getByText(/back to home/i);

    // Assert that the error message is rendered
    expect(screen.getByText(/oops something went wrong/i)).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.getAttribute('href')).toBe('/');
  });

  test('Should redirects to home when the link is clicked', () => {
    renderWithRouter(<NotFound />);

    // Simulate a click on the link
    const linkElement = screen.getByText(/back to home/i);
    userEvent.click(linkElement);

    // Assert that the user is redirected to the home page
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });
});
