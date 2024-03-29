import { Client, Message } from 'whatsapp-web.js'
import { waiting } from '../core/helpers'
import { translate } from '../services/ai'

export default async function traduzir(
  message: Message,
  client: Client,
  command: string = '!traduzir'
) {
  if (!message.body.startsWith(command)) return
  await waiting(message, client)
  const prompt = message.body.replace(command, '').trim()
  const result = await translate(prompt)
  await message.reply(result)
}
