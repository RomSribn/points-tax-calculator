/**
 * Format currency amount to the US readable format.
 * @param {number} number Raw number.
 * @returns {string} Formatted number, e.g. 3500 -> 3,500
 */
const getCurrencyAmount = (number: number): string => {
  const numberFormat = new Intl.NumberFormat('en-US', { currency: 'USD' });
  return numberFormat.format(number);
};

export { getCurrencyAmount };
