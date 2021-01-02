const Discord = require("discord.js");
exports.run = (client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR"));
  let every = message.guild.roles.cache.find(r => r.name === "@everyone");
 message.channel.createOverwrite(every, {
    SEND_MESSAGES: false
  });
  const embed = new Discord.MessageEmbed()
  .setDescription(`Kanal Başarıyla Kilitlendi `)
  .setColor('RANDOM')
  message.channel.send(embed)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kilit","lock"],
  kategori: "sohbet",
  permLevel: 3
};

exports.help = {
  name: "sohbet-kapat",
  description: "Sohbetinizi kapatmaya yarar işte yaw.",
  usage: "kapat"
};