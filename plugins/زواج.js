function getRandomParticipant(participants) {
  const randomIndex = Math.floor(Math.random() * participants.length);
  return participants[randomIndex];
}

function handler(m, { groupMetadata }) {
  const participants = groupMetadata.participants;
  
  if (participants.length < 2) {
    m.reply('*عذرًا، يجب أن يكون هناك على الأقل شخصين في المجموعة لاختيار الزوج والزوجة.*');
    return;
  }
  
  const groom = getRandomParticipant(participants);
  let bride;
  
  do {
    bride = getRandomParticipant(participants);
  } while (bride === groom);
  
  m.reply(`🎉 الف مبروك للعريس ${groom.id}! 🤵‍♂️\n🎉 الف مبروك للعروسة ${bride.id}! 👰‍♀️`);
}

handler.help = ['formarpareja'];
handler.tags = ['main', 'fun'];
handler.command = ['formarpareja', 'زواج'];
handler.group = true;

export default handler;
