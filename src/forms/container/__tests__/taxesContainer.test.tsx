import React from 'react';
import { customRender, screen, fireEvent } from '@utils/tests';
import { useTypedSelector } from '@utils/useTypedSelector';
import { taxesService } from '@services/taxesService';

import { TaxesForm } from '../taxes';

jest.mock('@services/taxesService');
jest.mock('@utils/useTypedSelector');
jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  useFormContext: () => ({
    handleSubmit: () => jest.fn(),
    getValues: () => jest.fn(),
    formState: {}
  }),
  useForm: () => ({ formState: {}, handleSubmit: jest.fn() })
}));

describe('TaxesForm', () => {
  // Mock the taxesService response
  const data = {};
  const apiState = {
    data,
    isError: false,
    refetch: jest.fn(),
    isFetching: false
  };
  beforeEach(() => {
    (useTypedSelector as jest.Mock).mockReturnValue({});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should renders the form', () => {
    (taxesService.useGetTaxesBracketsQuery as jest.Mock).mockReturnValue(apiState);

    const wrapper = customRender(<TaxesForm />);

    // Assert that the form elements are rendered
    expect(screen.getByLabelText('income')).toBeInTheDocument();
    expect(screen.getByLabelText('year')).toBeInTheDocument();
    expect(screen.getByText('Calculate')).toBeInTheDocument();

    expect(wrapper).toMatchSnapshot();
  });

  it('Should renders the form with loading button state', () => {
    (taxesService.useGetTaxesBracketsQuery as jest.Mock).mockReturnValue({ apiState, isFetching: true });

    const wrapper = customRender(<TaxesForm />);

    // Assert that the form elements are rendered
    expect(screen.getByText('Calculating...')).toBeInTheDocument();

    expect(wrapper).toMatchSnapshot();
  });

  it('Should displays an error message on submission error', async () => {
    // Mock the taxesService error response
    (taxesService.useGetTaxesBracketsQuery as jest.Mock).mockReturnValue({ ...apiState, data: null, isError: true });

    const wrapper = customRender(<TaxesForm />);

    // Submit the form
    fireEvent.submit(screen.getByText('Calculate'));

    // Assert that the error message is displayed
    const errorElement = await screen.findByText('Something went wrong, please try again');

    expect(errorElement).toBeInTheDocument();
    expect(wrapper).toMatchSnapshot();
  });
});
