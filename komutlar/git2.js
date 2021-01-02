const Discord = require("discord.js");

exports.run = async (client, message, args) => {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.react('❌')
if (!message.member.voice.channel) {
return message.reply("Ses kanalında olman lazım!");
}
  
let kullanıcı = message.mentions.members.first();
if (!kullanıcı) return message.channel.send('Bir Kullanıcı Belirt.');

let rol = message.mentions.roles.first();
let member = message.guild.member(kullanıcı);

if (!member.voice.channel) return message.channel.send('Etiketlenen Kullanıcı Ses Kanalında Değil.').then(m => m.delete(5000));

  


message.member.voice.setChannel(kullanıcı.voice.channel.id)
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["git2"],
  permLevel: 0,
}

exports.help = {
  name: "git2"
};