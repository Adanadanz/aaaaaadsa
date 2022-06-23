const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setColor("PURPLE")
.setAuthor(`${client.user.username} `, client.user.avatarURL)  
.setTitle(" Mensch | Yardım Menüsü")
.setThumbnail("https://cdn.discordapp.com/attachments/949388065632309288/949612066300370944/Mensch_Guven_VERIR.gif")
    .setDescription(`


---------------------------------------------------------------------------
**»** **mh!ban <etiket>** : Sunucudan bir üyeyi yasaklar.
**»** **mh!kick <etiket>** : Sunucudan bir üyeyi atar.
**»** **mh!sil <sayı>** : Belirli bir kanaldaki mesajları siler.
**»** **mh!antiraid aç/kapat** : Sunucuya izinsiz bot girmez.
**»** **mh!antiraidbotizni aç/kapat** : Sunucuya gelecek bot için izin verirsin.
**»** **mh!yavaş-mod <sayı>** : Sohbete yazma sınır (süre) ekler.
**»** **mh!sunucu-kur** : Bot sunucu kurar.
**»** **mh!küfür-engel aç/kapat** : Küfür engel açıp kapatırsın.
**»** **mh!reklam-engel aç/kapat** : Reklam engel açıp kapatırsın.
**»** **mh!modlog <kanal belirt>** : Modlog ayarlarsın.
**»** **mh!emoji-ekle <link ve İsim> ** : Sunucuya emoji eklersin.
**»** **mh!nuke** : Kanala nuke atarsın.
**»** **mh!everyone-engel aç/kapat** : Everyone kapatma yani engelleme.
**»** **mh!yardım** : Yardım menüsünü açar.
----------------------------------------------------------------------------
`) 
       .addField(`»  Bot Bağlantıları`, `  [Sunucumuz](https://discord.gg/GzbehEFkKk) **|** [Yardım = Mensch#8193] **|** [Sitemiz](https://cdn.discordapp.com/attachments/949388065632309288/949609190962397224/Yaknda.png)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz  `     
.setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
message.channel.send(mhelp)
.then; const sembed = new Discord.MessageEmbed()

}; 
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["yardım"], 
    permLevel: 0 
  };
 
  exports.help = {
    name: 'yardım', 
    description: 'yardım menüsü',
    usage: 'yardım'
  };