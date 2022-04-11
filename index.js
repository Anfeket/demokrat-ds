// import discord.js
const { Client, Collection } = require("discord.js");

// import fs
const fs = require("fs");

// create a discord client with intents
const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"]});

// import token from config.json
const config = require("./config.json");
// set token
const token = config.token;

// setup command handler
client.commands = new Collection();
const commandfiles = fs.readdirSync("./commands").filter((file) => file.endsWith(".js"));
for (const file of commandfiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

// on bot ready
client.on("ready", () => {
  console.log(`I am ready! ${client.user.tag}`);
});

// on message
client.on("messageCreate", (message) => {
    // log all messages
    console.log(`${message.author.username}: ${message.content}`);

    // pass to command handler
    if (!message.content.startsWith(config.prefix)) {
      return;
    }
    const args = message.content.slice(config.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (!client.commands.has(command)) {
      return;
    }
    try {
      client.commands.get(command).execute(message, args);
      console.log(`Executing ${command}`);
    } catch (error) {
      console.error(error);
      message.reply("there was an error trying to execute that command!");
    };
});

// login
client.login(token);