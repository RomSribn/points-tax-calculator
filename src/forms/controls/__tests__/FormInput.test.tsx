import React from 'react';
import { render, screen } from '@testing-library/react';

import { FormInput, FormInputProps } from '../FormInput';

describe('FormInput component', () => {
  test('renders input and error message elements', () => {
    const name = 'input-name';
    const inputId = 'input-id';
    const inputLabel = 'Input Label';
    const customClass = 'custom-class';
    const placeHolder = 'Enter a value';
    const register = jest.fn();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const errors: FormInputProps<TFormValues>['errors'] = {
      [name]: {
        message: 'Input is required'
      }
    };

    render(
      <FormInput
        name={name}
        register={register}
        errors={errors}
        id={inputId}
        label={inputLabel}
        className={customClass}
        placeholder={placeHolder}
      />
    );

    const formInputContainer = screen.getByTestId('form-input');
    const inputChildElement = screen.getByLabelText(inputLabel) as HTMLInputElement;
    const errorMessageChildElement = screen.getByText(errors[name].message);

    expect(inputChildElement).toBeInTheDocument();
    expect(inputChildElement.id).toBe(inputId);
    expect(inputChildElement.name).toBe(name);
    expect(inputChildElement.placeholder).toBe(placeHolder);
    expect(formInputContainer.className).toContain(customClass);

    expect(errorMessageChildElement).toBeInTheDocument();
    expect(formInputContainer).toMatchSnapshot();
  });
});
