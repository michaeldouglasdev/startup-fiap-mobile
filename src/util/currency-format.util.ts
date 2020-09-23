export const CurrencyFormat = (number: number) => {
  return `R$ ${number.toFixed(2).split('.').join(',')}`
}