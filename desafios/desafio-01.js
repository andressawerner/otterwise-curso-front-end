function orderUsers(users) {
  for (let i = 0; i < users.length - 1; i++) {
    for (let j = i + 1; j < users.length; j++) {
      if (users[i].idade > users[j].idade) {
        let temp = users[i].idade
        users[i].idade = users[j].idade
        users[j].idade = temp
      }
    }
  }

  return users
}

/*let test = [
  { nome: 'Juca', idade: 25, cargo: 'front-end' },
  { nome: 'Márcia', idade: 23, cargo: 'back-end' },
  { nome: 'Victória', idade: 28, cargo: 'designer' },
  { nome: 'João', idade: 29, cargo: 'front-end' },
  { nome: 'Catarina', idade: 22, cargo: 'front-end' },
  { nome: 'Enzo', idade: 25, cargo: 'product-owner' },
  { nome: 'Valentina', idade: 25, cargo: 'tech-lead' },
  { nome: 'Maurício', idade: 19, cargo: 'back-end' },
  { nome: 'Gabriela', idade: 20, cargo: 'back-end' },
  { nome: 'Joaquina', idade: 18, cargo: 'back-end' },
  { nome: 'Cris', idade: 21, cargo: 'back-end' },
]

console.log(orderUsers(test))*/
