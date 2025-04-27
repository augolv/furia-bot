require("dotenv").config();

const TelegramBot = require("node-telegram-bot-api");
const data = require("./data/mockData");
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
    ⚠ FuriaBot em beta, pode ter uns bugs! ⚠`
  );
});

bot.onText(/\/calendario/, (msg) => {
  const jogos = data.agenda.map((jogo) => `🗓️ ${jogo.date} - ${jogo.time} - ${jogo.teams} - ${jogo.event}`);
  bot.sendMessage(msg.chat.id, `🔥 Próximos jogos da Fúria:\n\n${jogos.join("\n\n")}`);
});

bot.onText(/\/resultados/, (msg) => {
  const resultados = data.resultados.map((resultado) => `🗓️ ${resultado.date} - ${resultado.teams} - ${resultado.map}`);
  bot.sendMessage(msg.chat.id, `🔥 Resultados recentes:\n\n${resultados.join("\n\n")}`);
});

bot.onText(/\/curiosidade/, (msg) => {
  const curiosidade = data.curiosidades[Math.floor(Math.random() * data.curiosidades.length)];
  bot.sendMessage(msg.chat.id, `🔥 Curiosidade: ${curiosidade}`);
});

bot.onText(/\/dica/, (msg) => {
  const dica = data.dicas[Math.floor(Math.random() * data.dicas.length)];
  bot.sendMessage(msg.chat.id, `🔥 Dica: ${dica}`);
});
