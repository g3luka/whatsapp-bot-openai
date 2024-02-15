import { Client, Message } from 'whatsapp-web.js'
import { waiting } from '../core/helpers'
import { question } from '../services/ai'

export default async function pergunta(
  message: Message,
  client: Client,
  command: string = '!pergunta'
) {
  if (!message.body.startsWith(command)) return
  await waiting(message.from, client)
  const prompt = message.body.replace(command, '').trim()
  try {
    const result = await question(prompt)
    await message.reply(result)
  } catch (error: any) {
    console.error(error)
    message.reply(`AI: Ops! Não foi possível resolver sua solicitação.\n\n${error.message}`)
  }
}
