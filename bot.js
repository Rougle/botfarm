const TelegramBot = require('node-telegram-bot-api');

const token = '337263517:AAG-MGtqZY_3MEU4lcRDvVuyf28e3AF-YdU';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\hai/, (message) => {
	bot.sendMessage(message.chat.id, 'oh hai!');
});

console.log('It lives!')