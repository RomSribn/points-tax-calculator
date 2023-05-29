import React from 'react';
import { render, screen } from 'src/utils/tests/test-utils';

import { ErrorMessage } from '../ErrorMessage';

describe('ErrorMessage', () => {
  test('Should renders the ErrorMessage component with the correct class and children', () => {
    const className = 'custom-spinner';
    const children = <span>children</span>;

    const wrapper = render(<ErrorMessage className={className}>{children}</ErrorMessage>);
    const errorMessageContainer = screen.getByTestId('error-message');
    const childrenComponent = screen.getByText('children');

    expect(errorMessageContainer.className).toBe(`font-serif text-sm text-left block text-red-600 ${className}`);
    expect(childrenComponent).toBeInTheDocument();
    expect(wrapper).toMatchSnapshot();
  });
});
