import { Client, Message } from 'whatsapp-web.js'

export async function waiting(
  message: Message,
  client: Client,
  content: string = 'Um momento, por favor...'
) {
  await message.reply(`AI: ${content}`)
}
