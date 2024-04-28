let handler = async (m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  
  let pesan = args.join(' ');
  let oi = `*♚~الرسالة:* ${pesan}`;
  let teks = `*  * \n\n ${oi}\n\n*🗡┇الجروب :⇣*\n`;
  
  for (let mem of participants) {
    teks += `*تفاعل ↫* @${mem.id.split('@')[0]}\n`;
  }
  
  teks += `*>𝗝𝗢𝗛𝗔𝗡-𝗕𝗢𝗧*\n\n*~𝗬𝗗.𝗔𝗛𝗟𝗔𝗡𝗘~*`;
  
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) });
};

handler.help = ['tagall <رسالة>', 'invocar <رسالة>'];
handler.tags = ['group'];
handler.command = /^(منشن|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;

export default handler;
