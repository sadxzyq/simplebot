let handler = async (m, { conn, text }) => {

    conn.sendMessage(m.chat, {
          react: {
            text: `${pickRandom(['๐จ','๐','๐','๐ณ','๐', '๐ฅต', '๐ฑ', '๐ฅถ', '๐', '๐ค','๐ฟ','๐ฅ','๐คจ','๐ช','๐','๐','๐', '๐','๐'])}`,
            key: m.key,
          }})
  
  }
handler.customPrefix = /(bile?k|ban?h|cum?|knt?l|y?|mmk|p|b(a|i)?c?(o|i)?(t|d)?|wibu|p(a)?nt(e)?k|pepe?k|owner)/i
handler.command = new RegExp
  
handler.mods = false

export default handler

  function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }
