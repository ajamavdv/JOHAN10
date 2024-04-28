let handler = async (m, { conn, participants, usedPrefix, command }) => {
  let kickMessage = "*~منشن الشخص!~*";

  if (!m.mentionedJid[0] && !m.quoted) {
    return m.reply(kickMessage, m.chat, { mentions: conn.parseMention(kickMessage) });
  }

  let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
  let groupID = m.chat.split("-")[0];

  await conn.groupParticipantsUpdate(groupID, [user], "remove");
  m.reply("`*تم الطرد!*`");
};

handler.help = ["kick @user"];
handler.tags = ["group"];
handler.command = ["kick", "طرد"];
handler.admin = true;
handler.group = true;
handler.botAdmin = true;

export default handler;
