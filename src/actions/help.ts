import { Client, Message } from 'whatsapp-web.js'

export default async function help(message: Message, client: Client, command: string = '!help') {
  if (message.body !== command) return
  const content = `Você pode usar os comandos abaixo:

    - *!ping* -> Retorna "pong"
    - *!piada* -> A AI conta uma piada aleatória
    - *!pergunta* -> Responde perguntas em geral
    - *!traduzir* -> Traduz um texto de PT-BR para EN
    - *!imagem* -> Gera uma imagem usando DALE-E-2
    - *!fale* -> Converte um texto para áudio

    COMO USAR: (Sem as [] e tem que começar com !comando)

    *!ping*
    *!piada*
    *!pergunta* [uma dúvida qualquer de conhecimentos gerais]
    *!traduzir* [texto em português]
    *!imagem* [uma descrição de para uma imagem]
    *!fale* [texto que será convertido para áudio]

    EXEMPLO:

    !pergunta quais eram as equipes da temporada 1994 da fórmula 1?
    `
  await message.reply(content)
}
