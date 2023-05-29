import React from 'react';
import { render, screen } from '@utils/tests';
import userEvent from '@testing-library/user-event';

import { Input } from '../Input';

describe('Input', () => {
  test('Should renders input element with correct attributes', () => {
    const id = 'input-id';
    const name = 'input-name';
    const label = 'Input Label';
    const placeholder = 'Enter a value';

    render(
      <Input
        id={id}
        name={name}
        label={label}
        placeholder={placeholder}
        className="custom-class"
        data-testid="input-element"
      />
    );

    const inputElement = screen.getByTestId('input-element') as HTMLInputElement;

    expect(inputElement).toBeInTheDocument();
    expect(inputElement.id).toBe(id);
    expect(inputElement.name).toBe(name);
    expect(inputElement.type).toBe('text');
    expect(inputElement.getAttribute('aria-label')).toBe(label);
    expect(inputElement.placeholder).toBe(placeholder);
    expect(inputElement.className).toContain('form-control');
    expect(inputElement.className).toContain('custom-class');

    expect(inputElement).toMatchSnapshot();
  });

  test('Should handles input changes', () => {
    const handleChange = jest.fn();
    const inputValue = 'Test Value';

    render(<Input id="input-id" name="input-name" label="Input Label" onChange={handleChange} />);

    const inputElement = screen.getByLabelText('Input Label') as HTMLInputElement;

    userEvent.type(inputElement, inputValue);

    expect(handleChange).toHaveBeenCalledTimes(inputValue.length);
    expect(inputElement.value).toBe(inputValue);
  });
});
