require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent], });
const clientToken = process.env.clientToken;

client.on('messageCreate', message => {
    if (message.author.bot) return;
    console.log(message.content);
    message.reply({
        content: 'Hi darling',
    })
});

client.login(clientToken);