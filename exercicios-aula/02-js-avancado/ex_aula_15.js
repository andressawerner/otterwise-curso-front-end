const colaboradores = [
  { name: 'Juca', idade: 25, cargo: 'front-end' },
  { name: 'Márcia', idade: 23, cargo: 'back-end' },
  { name: 'Vitória', idade: 28, cargo: 'designer' },
  { name: 'Fernando', idade: 19, cargo: 'estagiario' },
  { name: 'Fabiane', idade: 25, cargo: 'back-end' },
  { name: 'Jéssica', idade: 23, cargo: 'front-end' },
]

//tarefa (a)
const names = colaboradores.map(elem => elem.name)

console.log(names)

//tarefa (b)
const whoIsFront = colaboradores.filter(elem => elem.cargo === 'front-end')

console.log(whoIsFront)

//tarefa (c)
const olderThan23 = colaboradores.find(elem => elem.idade > 23)

console.log(
  olderThan23 ? olderThan23 : 'Não há nenhum colaborador maior de 23 anos'
)

//tarefa (d)
const every18 = colaboradores.every(elem => elem.idade > 18)

console.log(
  `${
    every18 ? 'Todos' : 'Não é verdade que'
  } os colaboradores são maiores de 18 anos.`
)

//tarefa (e)
const someEstagiario = colaboradores.some(elem => elem.cargo === 'estagiario')

console.log(
  `${someEstagiario ? 'Existe pelo menos um' : 'Não existe nenhum'} estagiário.`
)

//tarefa (f)
const sumAge = colaboradores.reduce((acc, curr) => acc + curr.idade, 0)

console.log(`A soma da idade de todos os colaboradores é ${sumAge}`)

//tarefa (g)
const orderByAge = colaboradores.sort(
  (firstElem, secondElem) => firstElem.idade - secondElem.idade
)

console.log(orderByAge)
