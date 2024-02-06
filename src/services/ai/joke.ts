import openai from '.'

export default async function joke(model: string = 'gpt-3.5-turbo'): Promise<string> {
  const completion = await openai.chat.completions.create({
    model,
    messages: [
      {
        role: 'system',
        content: 'Conte uma piada!',
      },
    ],
  })
  console.log('AI: Piada', { joke: completion.choices[0].message.content })
  return completion.choices[0].message.content
}
