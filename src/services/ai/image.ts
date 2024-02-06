import openai from '.'
import { ImageGenerateParams } from 'openai/resources'

export default async function image(params: ImageGenerateParams) {
  const response = await openai.images.generate(params)
  return response.data
}
