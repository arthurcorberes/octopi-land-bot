const Discord = require("discord.js");
const { SlashCommandBuilders } = require("@discordjs/builders");
const Canvas = require("canvas");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
    ]
});

const prefix = ("octopi!")

Client.on("ready", () => {
    console.log("Octopi Land Bot est prêt");
});

Client.on("messageCreate", message =>{
    if (message.author.bot) return;

    if(message.content === prefix + "ping"){
        message.channel.send("pong");
    }
});

Client.on("guildMemberAdd", async member => {
    Client.channels.cache.get("993416912023339079").send("Bienvenue dans Octopi Land," + "<@" + member.id + ">")

    var canvas = Canvas.createCanvas(600, 300);
    ctx = canvas.getContext("2d");
    var backgroud = await Canvas.loadImage("./bga.png");
    ctx.drawImage(backgroud, 0, 0, 600, 300);
    ctx.font = "42px Impact";
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.fillText(member.user.tag + "\n a rejoint le serveur !!!", 300, 150);
    var attachment = new Discord.MessageAttachment(canvas.toBuffer(), "welcome.png");

    Client.channels.cache.get("993416912023339079").send({files: [attachment]});
});

//Client.on("guildMemberRemove", member => {});

































Client.login("OTkzNDcwMTIzNjY5MjA5MTMw.GX8JlS.M5PMspVoWklZqVo75VRXxcEkuBGfSrpw6rdjxw");