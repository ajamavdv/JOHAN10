let handler = async (m, { conn, usedPrefix, text }) => {
  if (isNaN(text) && !text.match(/@/g)) {

  } else if (isNaN(text)) {
    var number = text.split`@`[1]
  } else if (!isNaN(text)) {
    var number = text
  }

  if (!text && !m.quoted) return conn.reply(m.chat, `*[❗] الاستخدام المناسب*\n\n*┯┷*\n*┠≽ ${usedPrefix}ترقية مشرف  @منشن*\n*┠≽ ${usedPrefix}ترقية مشرف  -> الرد على رسالة*\n*┷┯*`, m)
  if (number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, `*[ ⚠️ ] الرقم الذي تم إدخاله غير صحيح ، الرجاء إدخال الرقم الصحيح*`, m)

  try {
    var user = ''
    if (text) {
      user = number + '@s.whatsapp.net'
    } else if (m.quoted.sender) {
      user = m.quoted.sender
    } else if (m.mentionedJid) {
      user = number + '@s.whatsapp.net'
    }
  } catch (e) {
    console.log(e)
  } finally {
    conn.groupParticipantsUpdate(m.chat, [user], 'promote')
    conn.reply(m.chat, ``, m)
  }
}

handler.help = ['*212630299152*', '*@اسم المستخدم*', '*محادثة المستجيب*'].map(v => 'promote ' + v)
handler.tags = ['group']
handler.command = /^(ترقية)$/i
handler.group = true
handler.rowner = true
handler.botAdmin = true
handler.fail = null

export default handler
