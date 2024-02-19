import { Client, Message, MessageMedia } from 'whatsapp-web.js'
import { waiting } from '../core/helpers'
import { image } from '../services/ai'

export default async function imagem(
  message: Message,
  client: Client,
  command: string = '!imagem'
) {
  if (!message.body.startsWith(command)) return
  await waiting(message, client)
  const prompt = message.body.replace(command, '').trim()
  const images = await image({
    prompt,
    // response_format: 'b64_json',
    // model: 'dall-e-3',
  })
  for (const image of images) {
    console.log('AI: Imagem', { prompt, image: image.url })
    const media = await MessageMedia.fromUrl(image.url)
    await message.reply(media)
  }
}
