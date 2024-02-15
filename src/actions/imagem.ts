import { Client, Message, MessageMedia } from 'whatsapp-web.js'
import { waiting } from '../core/helpers'
import { image } from '../services/ai'

export default async function imagem(
  message: Message,
  client: Client,
  command: string = '!imagem'
) {
  if (!message.body.startsWith(command)) return
  await waiting(message.from, client)
  const prompt = message.body.replace(command, '').trim()
  try {
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
  } catch (error: any) {
    console.error(error)
    message.reply(`AI: Ops! Não foi possível resolver sua solicitação.\n\n${error.message}`)
  }
}
