import getTotal from './math.js'
import { isAfter } from 'date-fns'

export default formatClient

function formatClient(client, purchases) {
  return `Cliente: ${client.id} - ${client.name}
  ${formatPurchases(purchases)} ${formatTotal(purchases)}`
}

function formatPurchases(purchases, clientId) {
  if (!purchases.length) return `\nNão há compras para mostrar.\n`
  const purchasesOrder = purchases.sort((first, sec) => {
    if (first.data === sec.data) return 0
    const firstDate = first.data.split('/')
    const secDate = sec.data.split('/')
    return isAfter(
      new Date(firstDate[2], firstDate[1], firstDate[0]),
      new Date(secDate[2], secDate[1], secDate[0])
    )
      ? 1
      : -1
  })
  return purchasesOrder.reduce((acc, purchase) => {
    acc += `\nCompra em ${purchase.data} no total de ${formatCurrency(
      purchase.total
    )}.\n`
    return acc
  }, '')
}

function formatTotal(purchases) {
  return `\nTotal do cliente: ${formatCurrency(getTotal(purchases))}.`
}

function formatCurrency(value) {
  return `R$ ${value.toFixed(2)}`.replace('.', ',')
}
