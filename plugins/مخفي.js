import { MessageType, generateWAMessageFromContent } from '@adiwajshing/baileys';

let handler = async (m, { conn, text, participants }) => {
  let users = participants.map(u => conn.decodeJid(u.id));
  let q = m.quoted ? m.quoted : m;
  let c = m.quoted ? m.quoted : m.msg;
  const msg = conn.cMod(
    m.chat,
    generateWAMessageFromContent(m.chat, {
      [c.toJSON ? q.mtype : MessageType.extendedText]: c.toJSON ? c.toJSON() : {
        text: c || ''
      }
    }, {
      quoted: m,
      userJid: conn.user.jid
    }),
    text || q.text,
    conn.user.jid,
    { mentions: users }
  );
  await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
};

handler.help = ['hidetag'];
handler.tags = ['group'];
handler.command = ['مخفي'];
handler.group = true;
handler.admin = true;

export default handler;
