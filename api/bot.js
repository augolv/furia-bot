require("dotenv").config();
const express = require("express");
const TelegramBot = require("node-telegram-bot-api");
const data = require("../data/mockData");

const app = express();
app.use(express.json());

const token = process.env.TELEGRAM_TOKEN;
const bot = new TelegramBot(token, { polling: false });

const furiaCash = new Map();
const quizState = new Map();
const cooldowns = new Map();

function checkCooldown(chatId) {
  const now = Date.now();
  const cooldownDuration = 1000;
  const lastInteraction = cooldowns.get(chatId) || 0;

  if (now - lastInteraction < cooldownDuration) {
    bot.sendMessage(chatId, `Calma, pantera! 😎 Um clique é o suficiente.`);
    return false;
  }

  cooldowns.set(chatId, now);
  return true;
}

function addFuriaCash(chatId, amount) {
  const current = furiaCash.get(chatId) || 0;
  furiaCash.set(chatId, current + amount);
  return furiaCash.get(chatId);
}

function sendMenu(chatId) {
  bot.sendMessage(
    chatId,
    `🔥 Menu do FuriaBot 🔥\n/calendario - Próximos jogos da Fúria\n/resultados - Resultados recentes\n/curiosidade - Fatos sobre o time\n/quiz - Teste seus conhecimentos\n/dica - Dicas de CS\n/streamers - Nossos streamers\n/loja - Loja oficial\n💰 Complete ações pra ganhar FURIA Cash!\n⚠ FuriaBot em beta, pode ter uns bugs!`
  );
}

function getBackButton(chatId) {
  return {
    reply_markup: {
      inline_keyboard: [[{ text: "Voltar ⬅", callback_data: `menu_${chatId}` }]],
    },
  };
}

function sendQuizQuestion(chatId) {
  const state = quizState.get(chatId);
  if (!state || state.currentQuestion >= state.questions.length) {
    const cash = addFuriaCash(chatId, state.score * 0.1);
    bot.sendMessage(
      chatId,
      `🎮 Fim do Quiz! Você acertou ${state.score}/3! ${state.score === 3 ? "É uma pantera! 🐆" : "Mandou bem! 🔥"}\n\n💰 Ganhou $${(
        state.score * 0.1
      ).toFixed(2)} FURIA Cash! Saldo: $${cash.toFixed(2)}\n⚠ FuriaBot em beta, pode ter uns bugs!`,
      getBackButton(chatId)
    );
    quizState.delete(chatId);
    return;
  }

  const question = state.questions[state.currentQuestion];
  const message = `🎮 Quiz da FURIA! (${state.currentQuestion + 1}/3)\n\n${question.question}\n${question.options.join("\n")}`;
  bot.sendMessage(chatId, message, {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "A", callback_data: `quiz_${chatId}_${state.currentQuestion}_A` },
          { text: "B", callback_data: `quiz_${chatId}_${state.currentQuestion}_B` },
          { text: "C", callback_data: `quiz_${chatId}_${state.currentQuestion}_C` },
        ],
      ],
    },
  });
}

bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  if (msg.text && !msg.text.startsWith("/") && !msg.reply_markup) {
    if (!checkCooldown(chatId)) return;
    bot.sendMessage(
      chatId,
      `Opa, pantera! 🐾 Tô em beta e só respondo comandos por enquanto. Bora detonar com /menu? 😎\n\n⚠ FuriaBot em beta, pode ter uns bugs!`,
      getBackButton(chatId)
    );
  }
});

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  if (!checkCooldown(chatId)) return;
  const cash = addFuriaCash(chatId, 0.1);
  bot.sendMessage(
    chatId,
    `🐾 Fala, guerreiro(a)! Sou o FuriaBot da FURIA! 🔥\nQuer saber do próximo jogo ou detonar num quiz? Digite /menu\n\n💰 Ganhou $0,10 FURIA Cash! Saldo: $${cash.toFixed(
      2
    )}\n⚠ FuriaBot em beta, pode ter uns bugs!`
  );
});

bot.onText(/\/menu/, (msg) => {
  const chatId = msg.chat.id;
  if (!checkCooldown(chatId)) return;
  sendMenu(chatId);
});

bot.onText(/\/calendario/, (msg) => {
  const chatId = msg.chat.id;
  if (!checkCooldown(chatId)) return;
  let response = "🗓 Próximos jogos da FURIA:\n\n";
  data.agenda.forEach((jogo) => {
    response += `📅 ${jogo.date} ${jogo.time}\n⚔ ${jogo.teams}\n🏆 ${jogo.event}\n\n`;
  });
  const cash = addFuriaCash(chatId, 0.1);
  response += `💰 Ganhou $0,10 FURIA Cash! Saldo: $${cash.toFixed(2)}\n⚠ FuriaBot em beta, pode ter uns bugs!`;
  bot.sendMessage(chatId, response, getBackButton(chatId));
});

bot.onText(/\/resultados/, (msg) => {
  const chatId = msg.chat.id;
  if (!checkCooldown(chatId)) return;
  let response = "🏅 Resultados recentes da FURIA:\n\n";
  data.resultados.forEach((resultado) => {
    response += `📅 ${resultado.date}\n⚔ ${resultado.teams}\n🗺 Mapa: ${resultado.map}\n\n`;
  });
  const cash = addFuriaCash(chatId, 0.1);
  response += `💰 Ganhou $0,10 FURIA Cash! Saldo: $${cash.toFixed(2)}\n⚠ FuriaBot em beta, pode ter uns bugs!`;
  bot.sendMessage(chatId, response, getBackButton(chatId));
});

bot.onText(/\/curiosidade/, (msg) => {
  const chatId = msg.chat.id;
  if (!checkCooldown(chatId)) return;
  const curiosidade = data.curiosidades[Math.floor(Math.random() * data.curiosidades.length)];
  const cash = addFuriaCash(chatId, 0.1);
  bot.sendMessage(
    chatId,
    `🧠 Curiosidade: ${curiosidade}\n\n💰 Ganhou $0,10 FURIA Cash! Saldo: $${cash.toFixed(2)}\n⚠ FuriaBot em beta, pode ter uns bugs!`,
    getBackButton(chatId)
  );
});

bot.onText(/\/quiz/, (msg) => {
  const chatId = msg.chat.id;
  if (!checkCooldown(chatId)) return;

  quizState.set(chatId, {
    currentQuestion: 0,
    score: 0,
    questions: data.quiz.sort(() => Math.random() - 0.5).slice(0, 3),
  });
  sendQuizQuestion(chatId);
});

bot.on("callback_query", (callbackQuery) => {
  const chatId = callbackQuery.message.chat.id;
  const data = callbackQuery.data.split("_");

  if (data[0] === "menu" && parseInt(data[1]) === chatId) {
    if (!checkCooldown(chatId)) return;
    sendMenu(chatId);
    const firstName = callbackQuery.from.first_name || "Pantera";
    const cash = furiaCash.get(chatId) || 0;
    bot.sendMessage(chatId, `E aí, ${firstName} 🇧🇷 Seu saldo é de $${cash.toFixed(2)} FURIA Cash.`);
    bot.answerCallbackQuery(callbackQuery.id);
    return;
  }

  if (data[0] !== "quiz" || parseInt(data[1]) !== chatId) return;

  if (!checkCooldown(chatId)) return;

  const questionIndex = parseInt(data[2]);
  const answer = data[3];
  const state = quizState.get(chatId);

  if (!state || state.currentQuestion !== questionIndex) {
    bot.answerCallbackQuery(callbackQuery.id, { text: "Essa pergunta já foi respondida!" });
    return;
  }

  const question = state.questions[state.currentQuestion];
  const isCorrect = answer === question.correct;
  if (isCorrect) {
    state.score += 1;
  }

  bot.answerCallbackQuery(callbackQuery.id, {
    text: isCorrect ? "Acertou! 🔥" : "Errou, mas bora tentar de novo! 😎",
  });

  state.currentQuestion += 1;
  quizState.set(chatId, state);
  sendQuizQuestion(chatId);
});

bot.onText(/\/dica/, (msg) => {
  const chatId = msg.chat.id;
  if (!checkCooldown(chatId)) return;
  const dica = data.dicas[Math.floor(Math.random() * data.dicas.length)];
  const cash = addFuriaCash(chatId, 0.1);
  bot.sendMessage(
    chatId,
    `💡 Dica de CS: ${dica}\n\n💰 Ganhou $0,10 FURIA Cash! Saldo: $${cash.toFixed(2)}\n⚠ FuriaBot em beta, pode ter uns bugs!`,
    getBackButton(chatId)
  );
});

bot.onText(/\/streamers/, (msg) => {
  const chatId = msg.chat.id;
  if (!checkCooldown(chatId)) return;
  const streamers = ["Brino: https://twitch.tv/brino", "Paula Nobre: https://twitch.tv/paulanobre", "Rafinha: https://twitch.tv/raf1nhafps"];
  const cash = addFuriaCash(chatId, 0.1);
  bot.sendMessage(
    chatId,
    `🎥 Streamers da FURIA:\n${streamers.join("\n")}\n\n💰 Ganhou $0,10 FURIA Cash! Saldo: $${cash.toFixed(
      2
    )}\n⚠ FuriaBot em beta, pode ter uns bugs!`,
    getBackButton(chatId)
  );
});

bot.onText(/\/loja/, (msg) => {
  const chatId = msg.chat.id;
  if (!checkCooldown(chatId)) return;
  const cash = addFuriaCash(chatId, 0.1);
  bot.sendMessage(
    chatId,
    `🛒 Loja da Pantera: https://furia.gg\nConfere os looks brabos! 😎\n\n💰 Ganhou $0,10 FURIA Cash! Saldo: $${cash.toFixed(
      2
    )}\n⚠ FuriaBot em beta, pode ter uns bugs!`,
    getBackButton(chatId)
  );
});

// Configurar Webhook para Vercel
app.post("/bot", (req, res) => {
  bot.processUpdate(req.body);
  res.status(200).send("OK");
});

// Rota para verificar o status
app.get("/health", (req, res) => {
  res.status(200).send("Bot está rodando!");
});

module.exports = app;
