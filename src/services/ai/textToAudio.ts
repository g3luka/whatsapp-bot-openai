import fs from 'fs'
import path from 'path'
import { SpeechCreateParams } from 'openai/resources/audio/speech'
import openai from '.'

export default async function textToAudio(
  prompt: string,
  voice: SpeechCreateParams['voice'] = 'alloy',
  model: SpeechCreateParams['model'] = 'tts-1'
): Promise<string> {
  const filename = `./files/${crypto.randomUUID()}.mp3`
  const speechFile = path.resolve(filename)
  const audio = await openai.audio.speech.create({
    model,
    voice,
    input: prompt,
  })
  console.log('AI: Text-to-Audio', { voice, model, prompt })

  const buffer = Buffer.from(await audio.arrayBuffer())
  await fs.promises.writeFile(speechFile, buffer)

  return filename
}
