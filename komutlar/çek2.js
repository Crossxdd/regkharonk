const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.react('❌')

if (!message.member.voice.channel) {
return message.reply("Ses kanalında olman lazım!");
}
  
let kullanıcı = message.mentions.members.first()
if (!kullanıcı) return message.channel.send('Bir Kullanıcı Belirt.');

let member = message.guild.member(kullanıcı);

if (!member.voice.channel) return message.channel.send('Etiketlenen Kullanıcı Ses Kanalında Değil.').then(m => m.delete,{timeout: 5000});

const voiceChannel = message.member.voice.channel.id;
if (!voiceChannel) return;
  

  
message.react('✅')
kullanıcı.voice.setChannel(message.member.voice.channel.id)
}


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["çek2"],
  permLevel: 0,
}

exports.help = {
  name: 'çek2'
  
}