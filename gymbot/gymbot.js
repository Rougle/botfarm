const express = require('express');
const request = require('request'); 
const TelegramBot = require('node-telegram-bot-api');
const packageInfo = require('./package.json');

const token = '369533054:AAGMXhmLKCTKFQDKOfann08Ytg7A0bJzaPg';
const bot = new TelegramBot(token, { polling: true });
const content = require('./gymbot-content.json');

const app = express();

bot.onText(/\hai/, (message) => {
  bot.sendMessage(message.chat.id, 'oh hai');
});


bot.onText(/\/motivation/, (message) => {
  var count = content.motivations.length;
  var randomPick = Math.floor((Math.random() * count) + 1) - 1;
  bot.sendMessage(message.chat.id, content.motivations[randomPick]);
});


bot.onText(/\/advice/, (message) => {
  var count = content.protips.length;
  var randomPick = Math.floor((Math.random() * count) + 1) - 1;
  bot.sendMessage(message.chat.id, content.protips[randomPick]);
});

app.get('/', (req, res) => res.json({ version: packageInfo.version }));


app.listen(process.env.PORT || 3000, () => console.log('It lives!'));
