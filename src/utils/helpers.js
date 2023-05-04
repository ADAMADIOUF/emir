export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat('fr-SN', {
    style: 'currency',
    currency: 'XOF',
  }).format(number / 100)
  return newNumber
}
