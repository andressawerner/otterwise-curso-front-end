const installments = [
    {installment_number: 1, value: 123.45, status: 'Pago' },
    {installment_number: 2, value: 139.88, status: 'Pago' },
    {installment_number: 3, value: 123.45, status: 'Pago' },
    {installment_number: 4, value: 182.37, status: 'Aberto' },
    {installment_number: 5, value: 133.93, status: 'Aberto' },

]

//tarefa (a)
const total = installments.reduce(((acc, curr) => acc + curr.value), 0)
console.log(`R$ ${total.toFixed(2)}`)

//tarefa (b)
const paidAndOpen = (installments => {
    return installments.reduce((acc, curr) => {
        curr.status === 'Pago' ? acc.total_paid += curr.value : acc.total_open += curr.value
        return acc
    }, {total_paid: 0, total_open: 0})
})(installments)
console.log(paidAndOpen)

//tarefa (c)
const arrayByValue = installments.sort((a,b) => b.value - a.value)
console.log(arrayByValue)

//tarefa (d)
const arrayByValueAndNumber = installments.sort((a,b) => a.value - b.value ? a.value - b.value : b.installment_number - a.installment_number)
console.log(arrayByValueAndNumber)
