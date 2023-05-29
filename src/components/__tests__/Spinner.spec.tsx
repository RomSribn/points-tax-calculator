import React from 'react';
import { customRender, screen } from 'src/utils/tests/test-utils';
import { Spinner } from '@components/index';

describe('Spinner', () => {
  test('Should renders the Spinner component with the correct class', () => {
    const className = 'custom-spinner';

    const wrapper = customRender(<Spinner className={className} />);
    const spinnerContainer = screen.getByTestId('spinner-container');

    expect(spinnerContainer.classList.toString()).toBe(`d-flex align-items-center justify-content-center ${className}`);
    expect(wrapper).toMatchSnapshot();
  });
});
