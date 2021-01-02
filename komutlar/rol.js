const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const rol = require("../roller.json");
exports.run = async (client, message, args) => {
 if(!message.member.roles.cache.has("794655368700887041") && !message.member.hasPermission("ADMINISTRATOR")) return message.react('❌')

let sunucu = client.guilds.cache.get("758077398075048027")
  let kullanıcı = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
  
  if(args[0] === 'vip'){
  if(!kullanıcı) return message.channel.send(new MessageEmbed()
.setDescription(`Bir Kullanıcı Etiketle`)
.setColor('RANDOM'))
    message.guild.member(kullanıcı).roles.add(rol.vip)
    const embed = new MessageEmbed()
    .setDescription(`<@${kullanıcı.id}> Adlı Kullanıcıya <@&${rol.vip}> Rolü Verildi/Alındı.`)
    message.channel.send(embed)
    if(args[1] === 'al'){
    message.guild.member(kullanıcı).roles.remove(rol.vip)
    }
  }
  //-------------------------------------------------------------------------------------//
  if(args[0] === 'vokal'){
    if(!kullanıcı) return message.channel.send(new MessageEmbed()
.setDescription(`Bir Kullanıcı Etiketle`)
.setColor('RANDOM'))
    message.guild.member(kullanıcı).roles.add(rol.vokal)
    const embed = new MessageEmbed()
    .setDescription(`<@${kullanıcı.id}> Adlı Kullanıcıya <@&${rol.vokal}> Rolü Verildi/Alındı.`)
    message.channel.send(embed)
    if(args[1] === 'al'){
    message.guild.member(kullanıcı).roles.remove(rol.vokal)
    }
  }

  //-------------------------------------------------------------------------------------//
  if(args[0] === 'yayıncı'){
    if(!kullanıcı) return message.channel.send(new MessageEmbed()
.setDescription(`Bir Kullanıcı Etiketle`)
.setColor('RANDOM'))
    message.guild.member(kullanıcı).roles.add(rol.yayıncı)
    const embed = new MessageEmbed()
    .setDescription(`<@${kullanıcı.id}> Adlı Kullanıcıya <@&${rol.yayıncı}> Rolü Verildi/Alındı.`)
    message.channel.send(embed)
    if(args[1] === 'al'){
    message.guild.member(kullanıcı).roles.remove(rol.yayıncı)
    }
  }
  //-------------------------------------------------------------------------------------//
  if(args[0] === 'aktor'){
    if(!kullanıcı) return message.channel.send(new MessageEmbed()
.setDescription(`Bir Kullanıcı Etiketle`)
.setColor('RANDOM'))
    message.guild.member(kullanıcı).roles.add(rol.aktor)
    const embed = new MessageEmbed()
    .setDescription(`<@${kullanıcı.id}> Adlı Kullanıcıya <@&${rol.aktor}> Rolü Verildi/Alındı.`)
    message.channel.send(embed)
    if(args[1] === 'al'){
    message.guild.member(kullanıcı).roles.remove(rol.aktor)
    }
  }
  //-------------------------------------------------------------------------------------//
  if(args[0] === 'telli'){
    if(!kullanıcı) return message.channel.send(new MessageEmbed()
.setDescription(`Bir Kullanıcı Etiketle`)
.setColor('RANDOM'))
    message.guild.member(kullanıcı).roles.add(rol.telli)
    const embed = new MessageEmbed()
    .setDescription(`<@${kullanıcı.id}> Adlı Kullanıcıya <@&${rol.telli}> Rolü Verildi/Alındı.`)
    message.channel.send(embed)
    if(args[1] === 'al'){
    message.guild.member(kullanıcı).roles.remove(rol.telli)
    }
  }
  //-------------------------------------------------------------------------------------//
  if(args[0] === 'üflemeli'){
    if(!kullanıcı) return message.channel.send(new MessageEmbed()
.setDescription(`Bir Kullanıcı Etiketle`)
.setColor('RANDOM'))
    message.guild.member(kullanıcı).roles.add(rol.üflemeli)
    const embed = new MessageEmbed()
    .setDescription(`<@${kullanıcı.id}> Adlı Kullanıcıya <@&${rol.üflemeli}> Rolü Verildi/Alındı.`)
    message.channel.send(embed)
    if(args[1] === 'al'){
    message.guild.member(kullanıcı).roles.remove(rol.üflemeli)
    }
  }
  //-------------------------------------------------------------------------------------//
   if(args[0] === 'şair'){
    if(!kullanıcı) return message.channel.send(new MessageEmbed()
.setDescription(`Bir Kullanıcı Etiketle`)
.setColor('RANDOM'))
    message.guild.member(kullanıcı).roles.add(rol.şair)
    const embed = new MessageEmbed()
    .setDescription(`<@${kullanıcı.id}> Adlı Kullanıcıya <@&${rol.şair}> Rolü Verildi/Alındı.`)
    message.channel.send(embed)
     if(args[1] === 'al'){
    message.guild.member(kullanıcı).roles.remove(rol.şair)
    }
  }
  //-------------------------------------------------------------------------------------//
   if(args[0] === 'ressam'){
    if(!kullanıcı) return message.channel.send(new MessageEmbed()
.setDescription(`Bir Kullanıcı Etiketle`)
.setColor('RANDOM'))
    message.guild.member(kullanıcı).roles.add(rol.ressam)
    const embed = new MessageEmbed()
    .setDescription(`<@${kullanıcı.id}> Adlı Kullanıcıya <@&${rol.ressam}> Rolü Verildi/Alındı.`)
    message.channel.send(embed)
     if(args[1] === 'al'){
    message.guild.member(kullanıcı).roles.remove(rol.ressam)
    }
  }
  //-------------------------------------------------------------------------------------//
   if(args[0] === 'mizahşör'){
    if(!kullanıcı) return message.channel.send(new MessageEmbed()
.setDescription(`Bir Kullanıcı Etiketle`)
.setColor('RANDOM'))
    message.guild.member(kullanıcı).roles.add(rol.mizahşör)
    const embed = new MessageEmbed()
    .setDescription(`<@${kullanıcı.id}> Adlı Kullanıcıya <@&${rol.mizahşör}> Rolü Verildi/Alındı.`)
    message.channel.send(embed)
     if(args[1] === 'al'){
    message.guild.member(kullanıcı).roles.remove(rol.mizahşör)
    }
  }
  //-------------------------------------------------------------------------------------//
 if(args[0] === 'piyanist'){
    if(!kullanıcı) return message.channel.send(new MessageEmbed()
.setDescription(`Bir Kullanıcı Etiketle`)
.setColor('RANDOM'))
    message.guild.member(kullanıcı).roles.add(rol.piyanist)
    const embed = new MessageEmbed()
    .setDescription(`<@${kullanıcı.id}> Adlı Kullanıcıya <@&${rol.piyanist}> Rolü Verildi/Alındı.`)
    message.channel.send(embed)
   if(args[1] === 'al'){
    message.guild.member(kullanıcı).roles.remove(rol.piyanist)
    }
  }
  //-------------------------------------------------------------------------------------//
  if(args[0] === 'terapist'){
    if(!kullanıcı) return message.channel.send(new MessageEmbed()
.setDescription(`Bir Kullanıcı Etiketle`)
.setColor('RANDOM'))
    message.guild.member(kullanıcı).roles.add(rol.terapist)
    const embed = new MessageEmbed()
    .setDescription(`<@${kullanıcı.id}> Adlı Kullanıcıya <@&${rol.terapist}> Rolü Verildi/Alındı.`)
    message.channel.send(embed)
   if(args[1] === 'al'){
    message.guild.member(kullanıcı).roles.remove(rol.terapist)
    }
  }
  //-------------------------------------------------------------------------------------//
  if(args[0] === 'sorunçözücü'){
    if(!kullanıcı) return message.channel.send(new MessageEmbed()
.setDescription(`Bir Kullanıcı Etiketle`)
.setColor('RANDOM'))
    message.guild.member(kullanıcı).roles.add(rol.sorunçözücü)
    const embed = new MessageEmbed()
    .setDescription(`<@${kullanıcı.id}> Adlı Kullanıcıya <@&${rol.sorunçözücü}> Rolü Verildi/Alındı.`)
    message.channel.send(embed)
   if(args[1] === 'al'){
    message.guild.member(kullanıcı).roles.remove(rol.sorunçözücü)
    }
  }
  //-------------------------------------------------------------------------------------//
  if(args[0] === 'vkcezalı'){
    if(!kullanıcı) return message.channel.send(new MessageEmbed()
.setDescription(`Bir Kullanıcı Etiketle`)
.setColor('RANDOM'))
    message.guild.member(kullanıcı).roles.add(rol.vkcezalı)
    const embed = new MessageEmbed()
    .setDescription(`<@${kullanıcı.id}> Adlı Kullanıcıya <@&${rol.vkcezalı}> Rolü Verildi/Alındı.`)
    message.channel.send(embed)
   if(args[1] === 'al'){
    message.guild.member(kullanıcı).roles.remove(rol.vkcezalı)
    }
  }
  //-------------------------------------------------------------------------------------//
  if(args[0] === 'dccezalı'){
    if(!kullanıcı) return message.channel.send(new MessageEmbed()
.setDescription(`Bir Kullanıcı Etiketle`)
.setColor('RANDOM'))
    message.guild.member(kullanıcı).roles.add(rol.dccezalı)
    const embed = new MessageEmbed()
    .setDescription(`<@${kullanıcı.id}> Adlı Kullanıcıya <@&${rol.dccezalı}> Rolü Verildi/Alındı.`)
    message.channel.send(embed)
   if(args[1] === 'al'){
    message.guild.member(kullanıcı).roles.remove(rol.dccezalı)
    }
  }
  //-------------------------------------------------------------------------------------//
  
  
  
  
  
  


}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rol"],
  permLevel: 0
};

exports.help = {
  name: "rol",
  description: "Rol Vermenizi Sağlar.",
  usage: "rol"
};