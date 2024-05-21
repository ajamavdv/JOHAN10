import {
  getAntiLink,
  bot,
  // genButtonMessage,
  setAntiLink,
} from '../lib/';

bot(
  {
    pattern: 'antilink ?(.*)',
    fromMe: true,
    desc: 'تفعيل أو إيقاف الرابط المضاد',
    type: 'group',
    onlyGroup: true,
  },
  async (message, match) => {
    const antilink = await getAntiLink(message.jid);
    if (!match) {
      const onOrOff = antilink.enabled ? 'تم التفعيل' : 'تم الإيقاف';
      return await message.send(
        `_الرابط المضاد مفعل حاليًا: ${onOrOff}_\n*مثال:*\nantilink info\nantilink whatsapp.com\nantlink on | off`
      );
      // const button = await genButtonMessage(
      // 	[
      // 		{ id: 'antilink info', text: 'INFO' },
      // 		{ id: `antilink ${onOrOff}`, text: onOrOff.toUpperCase() },
      // 	],
      // 	'Example\nhttps://github.com/lyfe00011/whatsapp-bot-md/wiki/antilink',
      // 	'Antilink'
      // )
      // return await message.send(button, {}, 'button')
      // return await message.send(
      // 	await genHydratedButtons(
      // 		[
      // 			{
      // 				urlButton: {
      // 					text: 'Example',
      // 					url: 'https://github.com/lyfe00011/whatsapp-bot-md/wiki/antilink',
      // 				},
      // 			},
      // 			{
      // 				button: {
      // 					id: `antilink ${antilink.enabled ? 'off' : 'on'}`,
      // 					text: antilink.enabled ? 'OFF' : 'ON',
      // 				},
      // 			},
      // 			{ button: { id: 'antilink info', text: 'INFO' } },
      // 		],
      // 		'AntiLink'
      // 	),
      // 	{},
      // 	'template'
      // )
    }
    if (match == 'on' || match == 'off') {
      if (match == 'off' && !antilink)
        return await message.send('_الرابط المضاد غير مفعل حاليًا._');
      await setAntiLink(message.jid, match == 'on');
      return await message.send(
        `_تم ${match == 'on' ? 'تفعيل' : 'إيقاف'} الرابط المضاد._`
      );
    }
    if (match == 'info')
      return await message.send(
        `*الرابط المضاد:* ${antilink.enabled ? 'مفعل' : 'غير مفعل'}\n*الروابط المسموح بها:* ${
          antilink.allowedUrls
        }\n*الإجراء:* ${antilink.action}`
      );
    if (match.startsWith('action/')) {
      await setAntiLink(message.jid, match);
      const action = match.replace('action/', '');
      if (!['warn', 'kick', 'null'].includes(action))
        return await message.send('*إجراء غير صالح*');
      return await message.send(`_تم تحديث إجراء الرابط المضاد إلى ${action}_`);
    }
    const res = await setAntiLink(message.jid, match);
    return await message.send(
      `_الروابط المسموح بها في الرابط المضاد_\nالسماح - ${res.allow.join(
        ', '
      )}\nعدم السماح - ${res.notallow.join(', ')}`
    );
  }
);
