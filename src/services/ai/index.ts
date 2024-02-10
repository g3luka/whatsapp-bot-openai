import 'dotenv/config'
import OpenAI from 'openai'

import joke from './joke'
import image from './image'
import question from './question'
import translate from './translate'
import textToAudio from './textToAudio'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export default openai
export { image, joke, question, translate, textToAudio }
