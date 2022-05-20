// module.exports = message => 
export function routeMessageCreate(message){
    const response = require('../controllers/pong');
    const ban = require('../controllers/ban');

    //Verification si le commanditaire de la commande et Moderateur
    const roleModo = message.member.roles.cache.find(
        rol => rol.name === process.env.DISCORD_MODERATEUR_ROLE_NAME
    );

    //Extraction de la commande
    var commands = new String();
    if(message.content.indexOf(' ') < 0)
    commands = message.content;
    else
    commands = message.content.substring(0, message.content.indexOf(' '));
    
    //Commandes
    switch (commands) {
        case('!ping'): response(message);
        break;
        case('!ban'): 
        if(roleModo)
        ban(message);
        else
        message.reply("vous n'avez pas les droit !");
        break;
    }
  }