import { Client, Message } from 'whatsapp-web.js'
import { waiting } from '../core/helpers'
import { joke } from '../services/ai'

export default async function pergunta(
  message: Message,
  client: Client,
  command: string = '!piada'
) {
  if (message.body !== command) return
  await waiting(message, client, 'Ok, deixe-me pensar...')
  const result = await joke()
  await message.reply(result)
}
