const { MessageEmbed } = require('discord.js');
const data = require('quick.db')
exports.run = async (client, message, args) => {

let victim = message.mentions.users.first() || client.users.cache.get(args[0]) || (args.length > 0 ? client.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) || message.author;
	let avatar = victim.avatarURL({ dynamic: true, size: 2048 });
  message.channel.send(avatar)
};

exports.conf = {
    aliases: ['avatar','av','pp'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'avatar'
  };