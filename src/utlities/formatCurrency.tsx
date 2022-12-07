export function formatCurrency(number: number) {
  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumSignificantDigits: 7,
  });
  return USDollar.format(number);
}
