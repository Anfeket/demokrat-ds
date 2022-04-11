// import discord.js
const Discord = require("discord.js");

module.exports = {
	name: "vote",
	description: "Simple voting system",
	execute(message, args) {
        // voting system with args and embed
        if(!args[0]) return message.channel.send("Please provide a vote option!");
        const embed = new Discord.MessageEmbed()
        .setTitle("Vote by " + message.author.tag)
        .setDescription(`${args.join(" ")}`)
        // get users banner color
        .setColor(message.member.displayHexColor)
        // add users avatar
        .setThumbnail(message.author.displayAvatarURL())
        .setTimestamp();
        if(message.member.hasPermission("SEND_EMBEDS")) {    
            message.channel.send({embeds: [embed]}).then(async msg => {
                // react with ticks
                await msg.react("✅");
                await msg.react("❌");
            });
            // check if you have permission to delete the message
            if(message.deletable) {
                message.delete();
            } else {
                message.channel.send("I don't have permission to delete messages!");
        }} else {
            message.channel.send("cant send shit here");
        }},
};