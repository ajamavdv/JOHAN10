export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, isROwner }) {
  if (m.isBaileys && m.fromMe) return true;
  if (m.isGroup) return false;
  if (!m.message) return true;
  if (
    m.text.includes('PIEDRA') ||
    m.text.includes('PAPEL') ||
    m.text.includes('TIJERA') ||
    m.text.includes('serbot') ||
    m.text.includes('jadibot')
  ) {
    return true;
  }
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(
      `*[❗] ʜᴏʟᴀ @${m.sender.split`@`[0]}, كلم المطور لرفع لحظر عنكك او ادخل جروب دعم رسمي للبوت المطور: 212630299152 يمنع التحدث بالرسائل الخاصة للبوت وبالتالي سيتم حظرك.*`,
      false,
      { mentions: [m.sender] }
    );
    await this.updateBlockStatus(m.chat, 'block');
  }
  return false;
}
