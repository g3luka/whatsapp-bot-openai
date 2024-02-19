import { Client, Message } from 'whatsapp-web.js'
import { waiting } from '../core/helpers'
import { audioToText } from '../services/ai'

export default async function audioTexto(
  message: Message,
  client: Client,
  command: string = '!transcreva'
) {
  if (!message.hasMedia || message.type !== 'audio') return
  const media = await message.downloadMedia()
  await waiting(message, client)
  const text = await audioToText(media)
  await message.reply(text)
}
