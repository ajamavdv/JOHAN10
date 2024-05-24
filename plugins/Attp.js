import fetch from 'node-fetch';
import { createSticker } from '../lib/sticker.js';
import { Sticker } from 'wa-sticker-formatter';

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  if (!text) throw `*⊱┇تحويل كلام الى ملصق┇⊰*\n\n*⟣「مثال」*\n*◉ ${usedPrefix + command} henry-Bot*`;
  let teks = encodeURI(text);

  if (command == 'ستك') {
    let a1 = await (await fetch(`https://api.erdwpe.com/api/maker/attp?text=${teks}`)).buffer();
    let a2 = await createSticker(a1, false, global.packname, global.author);
    conn.sendFile(m.chat, a2, 'sticker.webp', '', m, { asSticker: true });
  }

  if (command == 'ستتك2') {
    conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/attp?apikey=${lolkeysapi}&text=${teks}`, 'sticker.webp', '', m, { asSticker: true });
  }

  if (command == 'ستتك3') {
    conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/attp2?apikey=${lolkeysapi}&text=${teks}`, 'sticker.webp', '', m, { asSticker: true });
  }

  if (command == 'ستتك5') {
    conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp6?apikey=${lolkeysapi}&text=${teks}`, 'sticker.webp', '', m, { asSticker: true });
  }

  if (command == 'ستتكر4') {
    conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp5?apikey=${lolkeysapi}&text=${teks}`, 'sticker.webp', '', m, { asSticker: true });
  }

  if (command == 'ستتكر3') {
    conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp3?apikey=${lolkeysapi}&text=${teks}`, 'sticker.webp', '', m, { asSticker: true });
  }

  if (command == 'ستتكر2') {
    conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp2?apikey=${lolkeysapi}&text=${teks}`, 'sticker.webp', '', m, { asSticker: true });
  }

  if (command == 'ستتكر') {
    conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp?apikey=${lolkeysapi}&text=${teks}`, 'sticker.webp', '', m, { asSticker: true });
  }
};
