module.exports = guild => {
    // import NotionControleur from ('../controllers/notionController.js')
    const notionControleur = new NotionControleur();
    guild.members.cache.forEach(member => {
        notionControleur.addItem(member.client.username);
    });
}