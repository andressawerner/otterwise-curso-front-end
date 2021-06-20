//tarefa (1)
const myUser = {
  name: 'Andressa Werner',
  age: 26,
  email: 'awkpereira@inf.ufpel.edu.br',
}

console.log(myUser)

//tarefa(2)
let array = ['a', 'b', 'c', 'd']

console.log(array[2])

//tarefa(3)
const dev = {
  name: 'Juca',
  projects: [
    {
      name: 'Projeto 1',
      start: '01/02/2021',
    },
    {
      name: 'Projeto 2',
      start: '03/03/2021',
    },
  ],
}

console.log(dev.name)
console.log(dev.projects[1])
console.log(dev.projects[0].name)

//tarefa(4)
array = [1, -22, 3, 4, -5]

for (let i = 0; i < array.length; i++) {
  array[i] = array[i] * 10
}

console.log(array)
