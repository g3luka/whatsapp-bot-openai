import { Client, Message, MessageMedia } from 'whatsapp-web.js'
import { waiting } from '../core/helpers'
import { textToAudio } from '../services/ai'

export default async function textoAudio(
  message: Message,
  client: Client,
  command: string = '!fale'
) {
  if (!message.body.startsWith(command)) return
  await waiting(message.from, client)
  const prompt = message.body.replace(command, '').trim()
  try {
    const audioFile = await textToAudio(prompt)
    await message.reply(MessageMedia.fromFilePath(audioFile))
  } catch (error: any) {
    console.error(error)
    message.reply(`AI: Ops! Não foi possível resolver sua solicitação.\n\n${error.message}`)
  }
}
