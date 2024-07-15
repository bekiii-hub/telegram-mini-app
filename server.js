const { Telegraf } = require('telegraf');
const express = require('express');
const app = express();

// Replace 'YOUR_BOT_TOKEN' with the token you got from BotFather
const bot = new Telegraf('7094327092:AAHeUF6MVlam4xPcKOljeIc_QcClk9JiCkk');

bot.start((ctx) => ctx.reply('Welcome to Tap to Earn Mini App!'));
bot.command('earn', (ctx) => {
    // Implement your earning logic here
    ctx.reply('You earned some coins!');
});

// Start the bot
bot.launch();

// Set up Express to handle webhook
const PORT = process.env.PORT || 3000;
app.use(bot.webhookCallback('/secret-path'));
bot.telegram.setWebhook(`https://your-glitch-project.glitch.me/secret-path`);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
