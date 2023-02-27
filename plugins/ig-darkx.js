
import fs from 'fs'
import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)


let str = `
"ᴄʟɪᴄᴋ ʜᴇʀᴇ"
`

conn.sendButtonDoc(m.chat, str, wm,' ᴏᴋᴇ ','huuu', m, { contextInfo: { externalAdReply: { showAdAttribution: false,
    mediaUrl: 'https://instagram/mydiam.is.fun',
    mediaType: 2, 
    description: sig,
    title: '≪ Follow Sɪɴɪ Cᴜʏ ⋟',
    body: wm,
    thumbnail: await(await fetch("https://telegra.ph/file/34c9f9ad5d6fa6d88d299.jpg")).buffer(),
    sourceUrl: sig
  }
  } }) 
          }
handler.help = ['igdark']

handler.tags = ['info']

handler.command = /^ig|dark$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.exp = 3

export default handler
