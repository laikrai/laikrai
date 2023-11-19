const { Client } = require('discord.js');

// You may have the intents enabled in your dev portal, but using 0 for intents means you don't need them for now.
const client = new Client({ intents: 0 });

// The client needs to be ready
client.on('ready', (c) => {
    console.log('Clearing commands...');

    /*
      Clear your bot's commands.
      If you want to clear for a specific guild, use this:
      client.application.commands.set([], 'guild id here');
    */
    client.application.commands.set([])
        // Wait for the promise to resolve
        .then(() => {
            console.log('Commands cleared.');
        })
        .catch(console.error); // Log any errors to the console
});

// Use your token
client.login('TOKEN');