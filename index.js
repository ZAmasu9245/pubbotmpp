const Discord = require('discord.js'),
        client = new Discord.Client,
        prefix = "!";

client.login(process.env.TOKEN)

client.on('ready', () => {
    console.log("je suis prêt !")
})

client.on('message', message => {
    if(message.content === prefix + "mp pub") {
        message.delete()
        message.guild.members.map(m => m.send("**Yo nous c’est la β2L**\n\n__Nous sommes un clan née très récemment et nous cherchons.__\n\n```- 10 Très bon builders\n\n - 2-3 modo\n\n - 1 manager\n\n - une communauté active\n\n- plusieurs graphistes très compétents\n\n- 2-3 Animateurs/trice ```\n\n **Shin :**\ **__N’hésitez pas à rejoindre leurs serveur est très sympas et travaillé !__**"))
    }
})