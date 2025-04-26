require("dotenv").config();

const TelegramBot = require("node-telegram-bot-api");
const token = process.env.TELEGRAM_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    `🐾 Fala, guerreiro(a)! Sou o FuriaBot! 🔥.
    Execute /menu para ver os comandos.`
  );
});

bot.onText(/\/menu/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    `🔥 Menu do FuriaBot 🔥
    /calendario - Próximos jogos da Fúria
    /resultados - Resultados recentes
    /curiosidade - Fatos sobre o time
    /quiz - Teste seus conhecimentos
    /dica - Dicas de CS
    /streamers - Nossos streamers
    /loja - Loja oficial
    💰 Complete ações pra ganhar FURIA Cash!
    ⚠ FuriaBot em beta, pode ter uns bugs!`
  );
});
