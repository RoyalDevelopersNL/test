async function createCmd(client, guildId){
    const data = [
        
        {
            name: 'help',
            description: `Krijg alle commando's die beschikbaar zijn!`
        },

    ]

    await client.guilds.cache.get(guildId)?.commands.set(data);

}

module.exports = { createCmd }