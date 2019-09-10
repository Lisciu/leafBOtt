const { Client, RichEmbed } = require("discord.js");
const { config } = require("dotenv");

const client = new Client({
    disableEveryone: true
})

config({
    path: __dirname + "/.env"
});

client.on("ready", () => {
    console.log(`Hi, ${client.user.username} is now online!`);

    client.user.setPresence({
        status: "online",
        game: {
            name: "kolorowe liście",
            type: "WATCHING"
        }
    }); 
})

client.on("message", message => {
    if(message.content === "!pomoc") {
        const embed = new RichEmbed()
        .setTitle("Dostępne komendy:")
        .setColor(0xFF0000)
        .setDescription("!info - pokazuje informacje na temat bota\n")
        message.channel.send(embed);
    }
    if(message.content === "!info") {
        var ram = process.memoryUsage().heapUsed / 1024 / 1024;
        message.channel.send(`RAM: ${ram} MB`);
    }
    if(message.content.includes("🍃")) {
        message.channel.send(":leaves:");
    }
    if(message.content.includes("🍂")) {
        message.channel.send(":fallen_leaf:");
    }
    if(message.content.includes("🍁")) {
        message.channel.send(":maple_leaf:");
    }
    if(message.content.includes("🍀")) {
        message.channel.send(":four_leaf_clover:");
    }
    if(message.content === "<@306129693571022849>") {
        message.channel.send("Zostaw go :rage:");
        return;
    }
    if(message.content === "leaf") {
        message.channel.send("Kocham go :hearts:");
        return;
    }
});

client.login(process.env.TOKEN);