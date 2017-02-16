const express = require('express');
const request = require('request'); 
const TelegramBot = require('node-telegram-bot-api');
const packageInfo = require('./package.json')

const token = '337263517:AAG-MGtqZY_3MEU4lcRDvVuyf28e3AF-YdU';
const bot = new TelegramBot(token, { polling: true });

const app = express();

bot.onText(/\hai/, (message) => {
	bot.sendMessage(message.chat.id, 'oh hai');
});


const url = 'https://api.chucknorris.io/jokes/random';

bot.onText(/\chuck/, (message) => {
	console.log("attempting get");
	request(url, function (error, response, body) {
	    if (!error && response.statusCode == 200) {
	      console.log(jsonbody);
	    }
	});
	console.log("printing jsonbody");
	bot.sendMessage(message.chat.id, "halp");
});



app.get('/', (req, res) => res.json({ version: packageInfo.version }));


app.listen(process.env.PORT || 3000, () => console.log('It lives! Again!'));
