import { Client, Message } from 'whatsapp-web.js'
import { waiting } from '../core/helpers'
import { joke } from '../services/ai'

export default async function pergunta(
  message: Message,
  client: Client,
  command: string = '!piada'
) {
  if (message.body !== command) return
  await waiting(message.from, client, 'Ok, deixe-me pensar...')
  try {
    const result = await joke()
    await message.reply(result)
  } catch (error: any) {
    console.error(error)
    message.reply(`AI: Ops! Não foi possível resolver sua solicitação.\n\n${error.message}`)
  }
}
