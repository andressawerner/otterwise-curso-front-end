//tarefa (1)
function printProp(obj) {
  const entries = Object.entries(obj)
  while (entries.length) {
    const propAndValue = entries.shift()
    console.log(
      `o valor da propriedade ${propAndValue[0]} é ${propAndValue[1]}`
    )
  }
}

const user = {
  name: 'Marília',
  age: 26,
  job: 'Dev',
}

console.log('Exercício 1:')
printProp(user)

//tarefa (2)
function whoAreDev(arrUsers) {
  const result = []
  const workers = arrUsers.slice()
  while (workers.length) {
    const devOrNot = workers.shift()
    result.push(
      `${devOrNot.name}${devOrNot.job === 'Dev' ? '' : ' não'} é dev.`
    )
  }
  console.log(result.join(' '))
}

const users = [
  {
    name: 'Marília',
    age: 26,
    job: 'Dev',
  },
  {
    name: 'Juca',
    age: 21,
    job: 'RH',
  },
  {
    name: 'Flávia',
    age: 30,
    job: 'Financeiro',
  },
  {
    name: 'Sérgio',
    age: 24,
    job: 'Dev',
  },
]

console.log('\nExercício 2:')
whoAreDev(users)
