const p1 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('Resolve p1'), 2000)
  })

const p2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('Resolve p2'), 1000)
  })

const p3 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject('Reject p3'), 3000)
  })

const all = async () => {
  try {
    const resp = await Promise.all([p1(), p2(), p3()])
    console.log(resp)
  } catch (error) {
    console.log(error)
  }
}

const race = async () => {
  try {
    const resp = await Promise.race([p1(), p2(), p3()])
    console.log(resp)
  } catch (error) {
    console.log('Erro: ', error)
  } finally {
    console.log('Final da Execução')
  }
}

//all()
//race()
