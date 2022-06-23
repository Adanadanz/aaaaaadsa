const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    const yetkihata = new Discord.MessageEmbed()
    .setColor('Red')
    .setDescription('`Yetkiniz Yetersizdir!`')
if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(yetkihata)

let channel = message.mentions.channels.first() || message.channel;

const uyg = new Discord.MessageEmbed()
.setColor("Random")
.setDescription("Uygulanıyor...")
 message.channel.send(uyg);
  
  const nuke = new Discord.MessageEmbed()
    .setAuthor(`Nuke Işlemi Başarılı ✅`)
    .setColor('Green')
    .setImage('https://cdn.discordapp.com/attachments/949388065632309288/949612066300370944/Mensch_Guven_VERIR.gif')
    .setTimestamp()
    .setFooter(`(${message.author.id})`)
    let position = channel.position;
    setTimeout(() => {
    channel.delete();
    channel.clone().then(msg => {
    msg.setPosition(position);
    msg.send(nuke);
});
}, 280)


};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'nuke'
};