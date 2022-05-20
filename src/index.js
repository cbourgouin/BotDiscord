require('dotenv').config();
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const token = process.env.DISCORD_TOKEN;
const routeMessageCreate = require('./routes/messageCreate');
const routeGuildMemberAdd = require('./routes/guildMemberAdd');
const routeGuildCreate = require('./routes/guildCreate');

client.once('ready', () => {
   console.log(`Félicitations, votre bot Discord a été correctement initialisé !`);
});

client.login(token);

client.on("messageCreate", message => {
   if(message.content)
   routeMessageCreate(message);
 });

 client.on("guildMemberAdd", member => {
   routeGuildMemberAdd(member);
 });

 client.on("guildCreate", guild => {
   routeGuildCreate(guild);
 })