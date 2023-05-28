import React from 'react';
import { customRender, screen } from '@utils/test-utils';
import { getCurrencyAmount } from '@utils/helpers';
import ResultCard, { IResultCard } from '@components/ResultCard';

describe('ResultCard', () => {
  const mockProps: IResultCard = {
    income: 5000,
    tax: 20,
    year: 2022,
    result: 4000
  };

  test('Should renders the component correctly', () => {
    const wrapper = customRender(<ResultCard {...mockProps} />);

    // Assert that the component is rendered
    expect(screen.getByText('Result')).not.toBeNull();
    expect(screen.getByText(`Tax rate`)).not.toBeNull();
    expect(screen.getByText(`Total tax rate for the ${mockProps.year} year`)).not.toBeNull();
    expect(screen.getByText(`${mockProps.tax}%`)).not.toBeNull();
    expect(screen.getByText(`Total pay`)).not.toBeNull();
    expect(screen.getByText(`Your gross salary income`)).not.toBeNull();
    expect(screen.getByText(`Taxes pay`)).not.toBeNull();
    expect(screen.getByText(`Tax you pay`)).not.toBeNull();
    expect(screen.getByText(`Net pay`)).not.toBeNull();

    expect(wrapper).toMatchSnapshot();
  });

  test('Should displays the correct currency format', () => {
    customRender(<ResultCard {...mockProps} />);

    // Assert that the currency amounts are displayed correctly
    expect(screen.getByText(`${getCurrencyAmount(mockProps.income)}$`).textContent).toBe('5,000$');
    expect(screen.getByText(`${getCurrencyAmount(mockProps.income - mockProps.result)}$`).textContent).toBe('1,000$');
    expect(screen.getByText(`${getCurrencyAmount(mockProps.result)}$`).textContent).toBe('4,000$');
  });
});
