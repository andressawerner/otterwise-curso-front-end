//tarefa (1)
const imprime = value => console.log(value)

console.log('Exercício 1: ')
imprime('Hello World!')
imprime(5)
imprime([1, 2, 3].join(' | '))

//tarefa (2)
const executeOnArray = (arrayNum, func) => {
  for (let i = 0; i < arrayNum.length; i++) {
    func(arrayNum[i])
  }
}

console.log('\nExercício 2: ')
const arrayTest = [1, 2, 3]
executeOnArray(arrayTest, a => console.log(a * 2))

//tarefa (3)
function calculate(oper) {
  const dicOperation = {
    soma: (a, b) => a + b,
    subtrai: (a, b) => a - b,
    multiplica: (a, b) => a * b,
    divide: (a, b) => a / b,
  }

  return dicOperation[oper]
}

console.log('\nExercício 3: ')
console.log(calculate('soma')(3, 5))
console.log(calculate('subtrai')(3, 5))
console.log(calculate('multiplica')(3, 5))
console.log(calculate('divide')(3, 5))
