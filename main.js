const discordjs = require("discord.js");
const token = require("./config.json");
const client = new discordjs.Client({
    intents: [
        discordjs.Intents.FLAGS.GUILDS,
        discordjs.Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.on("ready", () => {
    console.log("BOT ON XD");

    const guildid = "839603983400173608";
    const guild = client.guilds.cache.get(guildid);
    let commands;

    if (guild) {
        commands = guild.commands;
    } else {
        commands = client.application?.commands;
    }

    commands?.create({
        name: "ping",
        description: "dpc bot povie pong"
    });
})

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()) {
        return;
    }

    if (interaction.commandName === "ping") {
        interaction.reply({
            content: "pong",
            ephemeral: true
        })
    }
})

client.login(token.token);