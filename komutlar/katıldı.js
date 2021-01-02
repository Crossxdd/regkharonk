const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let embed = new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setFooter("Anais ❤️ Cross").setColor(client.randomColor()).setTimestamp();
  if(!("794883667552895006")) return message.channel.send("**Roller ayarlanmamış!**").then(x => x.delete({timeout: 5000}));
  if(!message.member.roles.cache.has("794655323725234186")) return message.channel.send(embed.setDescription(`Katıldı komutunu kullanabilmek için herhangi bir yetkiye sahip değilsin.`)).then(x => x.delete({timeout: 5000}));
  if(!message.member.voice || message.member.voice.channelID != ("794680715031609344")) return;
  
  let members = message.guild.members.cache.filter(member => member.roles.cache.has("794883667552895006") && member.voice.channelID != ("794680715031609344"));
  members.array().forEach((member, index) => {
    setTimeout(() => {
      member.roles.remove("794883667552895006").catch();
    }, index * 1250)
  });
  let verildi = message.member.voice.channel.members.filter(member => !member.roles.cache.has("794883667552895006") && !member.user.bot)
  verildi.array().forEach((member, index) => {
    setTimeout(() => {
      member.roles.add("794883667552895006").catch();
    }, index * 1250)
  });
  message.channel.send(embed.setDescription(`Katıldı rolü dağıtılmaya başlandı! 
  
  🟢 **Rol Verilecek:** ${verildi.size} 
  🔴 **Rol Alınacak:** ${members.size}`)).catch();
};
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['katıldı'],
    permLevel: 0,
}

exports.help = {
      name: "katıldı"  
  
}