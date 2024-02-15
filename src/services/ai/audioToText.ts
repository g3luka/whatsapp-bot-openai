import fs from 'fs'
import path from 'path'
import openai from '.'
import { MessageMedia } from 'whatsapp-web.js'
import { TranscriptionCreateParams } from 'openai/resources/audio/transcriptions'

export default async function audioToText(
  media: MessageMedia,
  language: string = 'pt',
  prompt?: string,
  response_format: TranscriptionCreateParams['response_format'] = 'json',
  model: TranscriptionCreateParams['model'] = 'whisper-1'
): Promise<string> {
  const {
    groups: { format },
  } = media.mimetype.match(/^audio\/(?<format>\w+)/)
  const filename = `./files/${crypto.randomUUID()}.${format}`
  const buffer = Buffer.from(media.data, 'base64')
  const audioFile = path.resolve(filename)
  await fs.promises.writeFile(audioFile, buffer)
  const file = fs.createReadStream(filename)

  const result = await openai.audio.transcriptions.create({
    file,
    model,
    language,
    prompt,
    response_format,
  })
  console.log('AI: Audio-to-Text', { result, model, prompt })

  return result.text
}
