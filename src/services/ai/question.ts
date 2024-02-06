import openai from '.'

export default async function question(
  question: string,
  model: string = 'gpt-3.5-turbo'
): Promise<string> {
  const completion = await openai.chat.completions.create({
    model,
    messages: [
      {
        role: 'system',
        content: 'Você existe para responder perguntas sobre conhecimentos gerais.',
      },
      { role: 'user', content: question },
    ],
  })
  console.log('AI: Pergunta', { question, answer: completion.choices[0].message.content })
  return completion.choices[0].message.content!
}
