// import discord.js
const Discord = require("discord.js");

// create a new command called "hello"
module.exports = {
	name: "userinfo",
	description: "mm tasty information",
	execute(message, args) {
        // is someone tagged?
        if (!message.mentions.users.size) {
            // if not, notify the user
            const taggedUser = message.author;
            const info = `${taggedUser.username}#${taggedUser.discriminator} has the ID of ${taggedUser.id} and was created on ${new Date(taggedUser.createdTimestamp).toISOString().replace(/T/, " ").replace(/\..+/, "")}\nAvatar: ${taggedUser.displayAvatarURL(true)}`;
            message.channel.send(`No one tagged! Using your own info.\n${info}`);
        } else {
            // if so, get the tagged user
            const taggedUser = message.mentions.users.first();
            const info = `${taggedUser.username}#${taggedUser.discriminator} has the ID of ${taggedUser.id} and was created on ${new Date(taggedUser.createdTimestamp).toISOString().replace(/T/, " ").replace(/\..+/, "")}\nAvatar: ${taggedUser.displayAvatarURL(true)}`;
            message.channel.send(`${info}`);
        }
	},
};