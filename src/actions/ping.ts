import { Client, Message } from 'whatsapp-web.js'

export default async function ping(message: Message, client: Client, command: string = '!ping') {
  if (message.body !== command) return
  await message.reply('pong')
}
