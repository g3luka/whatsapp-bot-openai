import { Client, Message } from 'whatsapp-web.js'

export default async function help(message: Message, client: Client, command: string = '!help') {
  if (message.body !== command) return
  const content = `Você pode usar os comandos abaixo:

    - *!pergunta* -> Responde perguntas em geral
    - *!traduzir* -> Traduz um texto de PT-BR para EN
    - *!imagem* -> Gera uma imagem usando DALE-E-2
    - *!piada* -> A AI conta uma piada aleatória
    - *!ping* -> Retorna "pong"

    COMO USAR: (Sem as [] e tem que começar com !comando)

    *!pergunta* [uma dúvida qualquer de conhecimentos gerais]
    *!traduzir* [texto em português]
    *!imagem* [uma descrição de para uma imagem]
    *!piada*
    *!ping*

    EXEMPLO:

    !pergunta quais eram as equipes da temporada 1994 da fórmula 1?
    `
  await message.reply(content)
}
