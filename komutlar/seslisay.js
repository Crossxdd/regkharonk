const { MessageEmbed } = require("discord.js");
module.exports.run = (client, message, args) => {
  
//-------------------------------------------------------------------------------\\
  
if(!['794655356869279764'].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) 
return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
  
//-------------------------------------------------------------------------------\\  
  

const embed = new MessageEmbed()
  .setColor('BLUE')
  message.channel.send(embed
.setDescription(`Ses kanallarında toplam **${(`${message.guild.channels.cache.filter(channel => channel.type == "voice").map(channel => channel.members.size).reduce((a, b) => a + b)}`)}** Üye bulunmakta
`)
.setThumbnail('https://images-ext-2.discordapp.net/external/qSYAi3TrLZ6Yba7_9d9Lhqt7EGa-Cc_9VRzhcPtxfNE/https/media.giphy.com/media/kFNMddkQQKds2mVMbI/giphy.gif')); 
};
  
  
  


  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sesli","seslisay"],
  permLvl: 0,
}

  exports.help = {
  name: 'sesli'
}
