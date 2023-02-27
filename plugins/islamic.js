import fetch from 'node-fetch'
let handler = async (m, usedPrefix, command) => {
 let g = await fetch(`https://raw.githubusercontent.com/inirey/RESTAPI/master/data/Islamic.json`)
let f = await g.json()
let a = f[Math.floor(Math.random() * f.length)]
conn.sendButtonImg(m.chat, a, "Random Image", "islamic", 'Next', ".islamic", m)
}
handler.help = ['islamic']
handler.tags = ['islam', 'internet']
handler.command = /^islamic$/i


export default handler
