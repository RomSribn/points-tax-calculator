import { getCurrencyAmount } from '@utils/helpers';

describe('getCurrencyAmount', () => {
  test('Should formats a positive number correctly', () => {
    const amount = 3500;
    const formattedAmount = getCurrencyAmount(amount);

    expect(formattedAmount).toBe('3,500');
  });

  test('Should formats a negative number correctly', () => {
    const amount = -2500;
    const formattedAmount = getCurrencyAmount(amount);

    expect(formattedAmount).toBe('-2,500');
  });

  test('Should formats a zero correctly', () => {
    const amount = 0;
    const formattedAmount = getCurrencyAmount(amount);

    expect(formattedAmount).toBe('0');
  });
});
