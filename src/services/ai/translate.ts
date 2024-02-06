import openai from '.'
import { ChatCompletionCreateParamsBase } from 'openai/resources/chat/completions'

export default async function translate(
  prompt: string,
  from: string = 'Português',
  to: string = 'Inglês',
  model: ChatCompletionCreateParamsBase['model'] = 'gpt-3.5-turbo'
): Promise<string> {
  const completion = await openai.chat.completions.create({
    model,
    messages: [
      {
        role: 'system',
        content: `Você vai receber uma sentença em ${from} e sua tarefa é traduzi-la para ${to}`,
      },
      { role: 'user', content: prompt },
    ],
  })
  console.log('AI: Traduzir', { prompt, translated: completion.choices[0].message.content })
  return completion.choices[0].message.content!
}
