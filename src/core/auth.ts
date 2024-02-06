import { Client } from 'whatsapp-web.js'
import qrcode from 'qrcode-terminal'

export default function auth(client: Client) {
  client.on('authenticated', () => {
    console.log('-> Client: Autenticado com sucesso')
  })

  client.on('auth_failure', () => {
    console.error('-> Client: Falha na autenticação')
  })

  client.on('disconnected', () => {
    console.log('-> Client: Desconectado')
  })

  client.on('remote_session_saved', () => {
    console.log('-> Client: Sessão remota salva')
  })

  client.on('qr', (qr) => {
    console.log('-> Client: QR recebido', qr)
    qrcode.generate(qr, { small: true })
  })
}
