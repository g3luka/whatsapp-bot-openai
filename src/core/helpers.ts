import { Client, Message } from 'whatsapp-web.js'

export async function waiting(
  from: Message['from'],
  client: Client,
  content: string = 'Um momento, por favor...'
) {
  await client.sendMessage(from, `AI: ${content}`)
}
