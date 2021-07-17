import data from './data.json'
import formatClient from './formatters.js'

function printClients(data) {
  data.clients.forEach((client, index) => {
    if (index) console.log('\n\n')
    console.log(
      formatClient(
        client,
        data.purchases.filter(purchase => purchase.client_id === client.id)
      )
    )
  })
}

printClients(data)
