const { download } = require('aptoide-scraper');

let handler = async (m, { conn, usedPrefix: prefix, command, text }) => {
  try {
    if (command === 'تطبيق') {
      if (!text) throw `*اكتب اسم التطبيق✌️*`;

      await conn.reply(m.chat, global.wait, m);
      let data = await download(text);

      if (data.size.replace(' MB', '') > 200) {
        return await conn.sendMessage(m.chat, { text: '*انا اسف ولكن مساحة الملف كبيرة 🤝🏻🐦*' }, { quoted: m });
      }

      if (data.size.includes('GB')) {
        return await conn.sendMessage(m.chat, { text: '*أنا اسف ولكن مساحة الملف كبيرة 🤝🏻🐦*' }, { quoted: m });
      }

      await conn.sendMessage(
        m.chat,
        { document: { url: data.dllink }, mimetype: 'application/vnd.android.package-archive', fileName: data.name + '.تطبيق', caption: null },
        { quoted: m }
      );
    }
  } catch (error) {
    throw `*حدث خطأ أثناء تنفيذ الأمر: ${error.message}*`;
  }
};

handler.command = /^تطبيق$/i;
module.exports = handler;
