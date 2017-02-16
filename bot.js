const express = require ('express');
const TelegramBot = require('node-telegram-bot-api');
const packageInfo = require('./package.json')

const token = '337263517:AAG-MGtqZY_3MEU4lcRDvVuyf28e3AF-YdU';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\hai/, (message) => {
	bot.sendMessage(message.chat.id, 'oh hai');
});


const app = express();

app.get('/', (req, res) => res.json({ version: packageInfo.version }));
app.listen(process.env.PORT || 3000, () => console.log('It lives! Again!'));
