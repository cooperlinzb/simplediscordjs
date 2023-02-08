const Discord = require('discord.js');
const config = require('./config');
const client = new Discord.Client();

const symbol = '-';

client.on('message', message => {
  if (!message.content.startsWith(symbol) || message.author.bot) return;

  const args = message.content.slice(symbol.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'ping') {
    message.channel.send('Pong!');
  } else if (command === 'beep') {
    message.channel.send('Boop!');
  }
});

client.login('your_token_here');
