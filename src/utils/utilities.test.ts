import { formatCurrency } from './utilities';

describe('utilities', () => {
  it.each([
    {
      number: 6.66,
      expectedVal: '£6.66',
    },
    {
      number: 55.5,
      expectedVal: '£55.50',
    },
    {
      number: 6660.22,
      expectedVal: '£6,660.22',
    },
    {
      number: -23,
      expectedVal: '-£23.00',
    },
  ])('formats number to sterling currency value', ({ number, expectedVal }) => {
    const currencyVal = formatCurrency(number);

    expect(currencyVal).toBe(expectedVal);
  });
});
