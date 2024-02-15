import ping from './ping'
import help from './help'
import piada from './piada'
import pergunta from './pergunta'
import traduzir from './traduzir'
import imagem from './imagem'
import textoAudio from './texto-audio'
import audioTexto from './audio-texto'
import { Client, Message } from 'whatsapp-web.js'

export { ping, help, piada, pergunta, traduzir, imagem, textoAudio, audioTexto }

export default async function actions(message: Message, client: Client) {
  if (!shouldInterceptMessage(message)) return

  await logMessage(message)

  return await Promise.all([
    ping(message, client),
    help(message, client),
    piada(message, client),
    pergunta(message, client),
    traduzir(message, client),
    imagem(message, client),
    textoAudio(message, client),
    audioTexto(message, client),
  ])
}

function shouldInterceptMessage(message: Message): boolean {
  return message.body.startsWith('!') || message.hasMedia
}

async function logMessage(message: Message) {
  const contact = await message.getContact()
  const contactName = contact?.name || contact?.shortName || contact.pushname || contact.number
  console.log('-> Client: Mensagem recebida', {
    from: message.from,
    contact: contactName,
    body: message.body,
  })
}
