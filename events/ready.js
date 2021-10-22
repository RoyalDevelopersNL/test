const Discord = require('discord.js');
const client = require("../index").client
const { createCmd } = require('../dataHandler');

client.on('ready', () => {
    client.user.setPresence({ activities: [{ name: `/help | play.lucremc.nl`, type: "PLAYING" }] })

    createCmd(client, '859081771088871465')
})