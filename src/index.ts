import client from './core/client'
import actions from './actions'

client.on('message_create', async (message) => {
  await actions(message, client)
})

client.initialize()
