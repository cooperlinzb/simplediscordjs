const Discord = require('discord.js');
const config = require('./config');
const client = new Discord.Client();

const symbol = '-';

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (!message.content.startsWith(symbol) || message.author.bot) return;

  const args = message.content.slice(symbol.length).split(/ +/);
  const command = args.shift().toLowerCase();

client.login(config.token);

