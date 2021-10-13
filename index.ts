//use 'npx ts-node index.ts' to run script

import * as DiscordJS from 'discord.js' 
import * as dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
  intents: [
    DiscordJS.Intents.FLAGS.GUILDS,
    DiscordJS.Intents.FLAGS.GUILD_MESSAGES
  ]
})

client.on('ready', () => {
  console.log('the bot is ready')
})

client.on('messageCreate', (msg) => {
  if(msg.content === 'marco') {
    msg.reply({
      content: 'polo'
    })
  }
})

client.on('')

client.login(process.env.token);
