let { generateWAMessageFromContent, prepareWAMessageMedia, proto } = (await import('@adiwajshing/baileys')).default
import moment from 'moment-timezone'
import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, args, usedPrefix, command }) => {
var messaa = await prepareWAMessageMedia({ image: fs.readFileSync('./media/ok.jpg') }, { upload: conn.waUploadToServer })
var groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "120363044585298853@g.us",
"inviteCode": "CCQOGaVVa3WGtDxls8Ew5S",
"inviteExpiration": `99999999999`,
"groupName": "𝘿𝙖𝙧𝙠𝙭-𝘽𝙊𝙏",
"caption": `Iya Halo Bang, Kenapa?`,
"jpegThumbnail": messaa.imageMessage,
}
}), { userJid: m.chat, quoted: ftroli })
conn.relayMessage(m.chat, groupInvite.message, { messageId: groupInvite.key.id })
}
handler.help = ['Bot']
handler.tags = ['main']
handler.command = /^(Bot|HaloBot|p)$/i

export default handler