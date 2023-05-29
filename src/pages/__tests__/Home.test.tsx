import React from 'react';
import { customRender, screen } from '@utils/tests';
import { Home } from '@pages/index';
import { useTypedSelector } from '@utils/useTypedSelector';
import { taxesService } from '@services/taxesService';

jest.mock('@utils/useTypedSelector');
jest.mock('@services/taxesService');

describe('Home component', () => {
  const appMockedState = {
    income: 100000,
    currentBracket: {
      max: 210371,
      min: 147667,
      rate: 0.29
    },
    year: 2019,
    result: 71000
  };

  const apiMockedState = { isLoading: true, isFetching: true };

  beforeEach(() => {
    (useTypedSelector as jest.Mock).mockReturnValue({});
    (taxesService.useGetTaxesBracketsQuery as jest.Mock).mockReturnValue({});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Should renders correctly', async () => {
    const wrapper = customRender(<Home />);

    expect(wrapper).toMatchSnapshot();
  });

  test('Should renders TaxesForm and ResultCard when data is available', () => {
    // Mock the response data for useGetTaxesBracketsQuery
    (useTypedSelector as jest.Mock).mockReturnValue(appMockedState);

    const wrapper = customRender(<Home />);

    expect(screen.getByTestId('taxes-form')).toBeInTheDocument();
    expect(screen.getByTestId('result-card')).toBeInTheDocument();
    expect(wrapper).toMatchSnapshot();
  });

  test('Should renders Spinner when loading data', () => {
    // Mock the loading state for useGetTaxesBracketsQuery
    (taxesService.useGetTaxesBracketsQuery as jest.Mock).mockReturnValue(apiMockedState);

    const wrapper = customRender(<Home />);

    expect(screen.getByTestId('taxes-form-spinner')).toBeInTheDocument();
    expect(wrapper).toMatchSnapshot();
  });

  test('Should renders Spinner when fetching data', () => {
    // Mock the fetching state for useGetTaxesBracketsQuery
    (taxesService.useGetTaxesBracketsQuery as jest.Mock).mockReturnValue({ ...apiMockedState, isLoading: false });

    const wrapper = customRender(<Home />);

    expect(screen.getByTestId('result-spinner')).toBeInTheDocument();
    expect(wrapper).toMatchSnapshot();
  });
});
