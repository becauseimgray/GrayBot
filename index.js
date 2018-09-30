const botconfig = require("./botconfig.json"); //loads botconfig
const Discord = require("discord.js"); //grabs discord.js libraries
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
	console.log('${bot.user.username} is live!');

	//make the bot do thing
});
bot.login(botconfig.token);

