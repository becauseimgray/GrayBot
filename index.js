const botconfig = require("./botconfig.json"); //loads botconfig
const Discord = require("discord.js"); //grabs discord.js libraries
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
	console.log(`${bot.user.username} is live!`);
	bot.user.setActivity("with code!");
});

bot.on("message", async message => {
	if(message.author.bot) return;
	if(message.channel.type === "dm") return;

// v_[0] v_slice(1)
// !say Hello 
// ^Command ^Argument
// Separates prefix, command, and arguments from one another
// in order to determine what action to take.
	let prefix = botconfig.prefix;
	let messageArray = message.content.split(" ");
	let cmd = messageArray[0];
	let args = messageArray.slice(1);

	if(cmd === `${prefix}hello`){
		return message.channel.send("Hello!");
	}

	if(cmd === `${prefix}botinfo`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt);

    return message.channel.send(botembed);
  } 

});




























bot.login(botconfig.token);

