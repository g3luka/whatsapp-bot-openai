import { Client, LocalAuth } from 'whatsapp-web.js'
import auth from './auth'

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  },
})

auth(client)

client.on('ready', () => {
  console.log('-> Client: Pronto para receber mensagens!')
})

export default client
