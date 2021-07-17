function getTotal(purchases, clientId) {
  return purchases.reduce((acc, curr) => acc + curr.total, 0)
}

export default getTotal
