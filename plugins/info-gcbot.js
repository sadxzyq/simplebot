import fs from 'fs'
import fetch from 'node-fetch'
 let handler = async(m, { conn }) => { 

         let pp = fs.readFileSync('./thumbnail.jpg')
         let gc1 = 'https://instagram.com/mydiam.is.fun'
         let caption = `*Mʏ Ig Oғғɪᴄɪᴀʟ*`
         await conn.sendButtonDoc(m.chat, caption, wm, 'Owner', '.owner', m, { contextInfo: { 
             externalAdReply: {
               sourceUrl: `sig`,
               title: 'My Instagram Official', 
               body: 'Darkxtzy',
               thumbnail: pp
             } 
         }})
         }

handler.tags = ['info']
handler.command = /^gcsat$/i
 export default handler