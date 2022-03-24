// import discord.js
const { Client, Intents } = require('discord.js');

// create a discord client with intents
const client = new Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] });

// import token from config.json
const config = require('./config.json');
// set token
const token = config.token;

// on bot ready
client.on('ready', () => {
  console.log('I am ready!');
});

// on message
client.on('messageCreate', message => {
    // log all messages
    console.log(`${message.author.username}: ${message.content}`);
});


// login
client.login(token);
