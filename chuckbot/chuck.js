const express = require('express');
const request = require('request'); 
const TelegramBot = require('node-telegram-bot-api');
const packageInfo = require('./package.json')

const token = 'TELEGRAM-TOKEN-HERE';
const bot = new TelegramBot(token, { polling: true });

const app = express();

bot.onText(/\/chuck/, (message) => {
	request('https://api.chucknorris.io/jokes/random', function (error, response, body) {
	    if (!error && response.statusCode == 200) {
	    	var parsed = JSON.parse(body)
			bot.sendMessage(message.chat.id, parsed.value);
	    }
	});
});

app.get('/', (req, res) => res.json({ version: packageInfo.version }));


app.listen(process.env.PORT || 3000, () => console.log('It lives! Again!'));
