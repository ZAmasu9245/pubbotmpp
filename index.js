const Discord = require('discord.js'),
        client = new Discord.Client,
        prefix = "!";

client.login("NjAwNTk4MzE3ODk4MDA2NTM0.XS2E5g.cDvOlL_Oq21P2a6PG0gcB-7gs28")

client.on('ready', () => {
    console.log("je suis prêt !")
})

client.on('message', message => {
    if(message.content === prefix + "mp pub") {
        message.delete()
        message.guild.members.map(m => m.send("**Yo nous c’est la β2L**\n\n__Nous sommes un clan née très récemment et nous cherchons.__\n\n```- 10 Très bon builders\n\n - 2-3 modo\n\n - 1 manager\n\n - une communauté active\n\n- plusieurs graphistes très compétents\n\n- 2-3 Animateurs/trice ```\n\n **Shin :**\ **__N’hésitez pas à rejoindre leurs serveur est très sympas et travaillé !__** \n https://discord.gg/8ARUWnt"))
    }
})
