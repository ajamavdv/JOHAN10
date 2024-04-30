let handler = async (m, { conn }) => {
conn.reply(m.chat,`——————–—\n\n————————“${pickRandom(global.verdaad)}“——————–—\n\n——————–—`, m)
}
handler.help = ['استدعاء']
handler.tags = ['fun']
handler.command = /^استدعاء/i
export default handler
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
global.verdaad = [
"✌️`حاضر`✌️",
