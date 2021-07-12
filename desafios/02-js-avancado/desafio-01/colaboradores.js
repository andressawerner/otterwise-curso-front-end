const colaboradores = [
    { name: 'Juca', idade: 25, cargo: 'front-end' },
    { name: 'Márcia', idade: 23, cargo: 'back-end' },
    { name: 'Vitória', idade: 28, cargo: 'designer' },
    { name: 'Fernando', idade: 19, cargo: 'estagiario' },
    { name: 'Fabiane', idade: 25, cargo: 'back-end' },
    { name: 'Jéssica', idade: 23, cargo: 'front-end' },
  ]

//tarefa (a)
const qtdByRole = (workersList => {
  const arrayRoles = workersList.map(elem => elem.cargo)
  return arrayRoles.reduce((acc, curr) => {
    acc[curr] = acc[curr] ? acc[curr] + 1 : 1
    return acc
  }, {})
})(colaboradores)
console.log(qtdByRole)

//tarefa (b)
const arrayByAge = colaboradores.sort((a,b) => b.idade - a.idade)
console.log(arrayByAge)

//tarefa (c)
const order = {'estagiario': 0, 'front-end': 1, 'back-end': 2, 'designer': 3}
const orderByRole = colaboradores.sort((a,b) => order[a.cargo] - order[b.cargo])
console.log(orderByRole)

//tarefa (d)
const ageAndRole = colaboradores.sort((a,b) => (a.idade - b.idade ? a.idade - b.idade : order[a.cargo] - order[b.cargo]))
console.log(ageAndRole)
