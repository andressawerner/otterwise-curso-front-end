const user = {
  nome: 'Usuário',
  idade: 25,
  endereco: {
    rua: 'Rua central',
    numero: 1,
  },
  projetos: ['Projeto 1', 'Projeto 2'],
}

const newUser = {
  nome: 'Andressa',
  default: false,
}

const students = [
  { id: 1, name: 'John Doe', age: 23, scholarship: false },
  { id: 2, name: 'Margoe Rose', age: 19, scholarship: true },
  { id: 3, name: 'Kayle', age: 22, scholarship: true },
]

//Exercício (1)
//tarefa (a)
const { nome } = user
console.log(nome)

//tarefa (b)
const {
  endereco: { rua },
} = user
console.log(rua)

//tarefa (c)
const { projetos } = user
console.log(projetos)

//tarefa (d)
const {
  projetos: [, projeto2],
} = user
console.log(projeto2)

//Exercício (2)
//tarefa (a)
const [firstElement] = students
console.log(firstElement)

//tarefa (b)
const [, , thirdElement] = students
console.log(thirdElement)

//tarefa (c)
const [, { name }] = students
console.log(name)

//Exercício (3)
const func = (...rest) => console.log(...rest)
func(1, 2, 3, 'quatro')

//Exercício (4)
const printName = ({ nome, ...rest }) => console.log(nome)
printName(user)

//Exercício (5)
const matchObj = (obj1, obj2) => {
  return { ...obj1, ...obj2 }
}
console.log(matchObj(user, newUser))

//Exercício (6)
const matchArray = (array1, array2) => [...array1, ...array2]
const a1 = [1, 2, 3]
const a2 = [10, 20, 30]
console.log(matchArray(a1, a2))
