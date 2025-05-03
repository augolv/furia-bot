<h1 align="center" style="font-weight: bold;">FuriaBot 💻</h1>

<p align="center">
 <a href="#tech">Tecnologias</a> • 
 <a href="#started">Como Começar</a> • 
 <a href="#commands">Comandos do Bot</a> • 
 <a href="#contribute">Contribuir</a>
</p>

<p align="center">
    <b>FuriaBot é um chatbot no Telegram que engaja fãs do time de Counter-Strike da Fúria com informações sobre jogos, quizzes interativos, dicas de CS e links para streamers e loja oficial. Desenvolvido para o desafio "Experiência Conversacional" da Fúria. O bot está hospedado em produção na Vercel e acessível via Telegram!</b>
</p>

<h2 id="tech">💻 Tecnologias</h2>

- **Backend**:
  - Node.js
  - node-telegram-bot-api
  - express
  - dotenv
- **Ferramentas**:
  - Git
  - npm
  - Vercel

<h2 id="started">🚀 Como Começar</h2>

Aqui estão as instruções para rodar o FuriaBot localmente na sua máquina ou acessar a versão em produção.

<h3>Acessando o Bot em Produção</h3>

O FuriaBot está hospedado na Vercel e disponível no Telegram:

- **Telegram**: Acesse o bot em [https://web.telegram.org/k/#@AugFuriaBot](https://web.telegram.org/k/#@AugFuriaBot).
- **Status**: Verifique se o bot está ativo em [https://furia-bot-tau.vercel.app/health](https://furia-bot-tau.vercel.app/health).
- Digite `/start` no Telegram para começar!

<h3>Pré-requisitos (para rodar localmente)</h3>

- [Node.js](https://nodejs.org/) (v16 ou superior recomendado)
- [Git](https://git-scm.com/)
- [Telegram](https://telegram.org/) (para interagir com o bot)
- Conta no Telegram com acesso ao [BotFather](https://t.me/BotFather)

<h3>Clonando</h3>

Clone o repositório para sua máquina local:

```bash
git clone https://github.com/augolv/furia-bot
```

<h3>Configurando Variáveis de Ambiente</h3>

O projeto usa variáveis de ambiente para configuração. Use o arquivo `.env.example` como referência para criar seu próprio `.env`.

1. No Telegram, crie um bot com o [BotFather](https://t.me/BotFather) usando `/newbot`.
2. Copie o token fornecido pelo BotFather.
3. Crie o arquivo `.env` na raiz do projeto:

```yaml
TELEGRAM_TOKEN=SUA_CHAVE_DO_BOT
```

<h3>Iniciando o Bot</h3>

Inicie o bot localmente (usando polling):

```bash
cd furia-bot
npm install
npm start
```

**Nota**: A versão em produção na Vercel usa Webhooks para maior eficiência. Para testar Webhooks localmente, configure um túnel como [ngrok](https://ngrok.com/) e atualize o Webhook via:

```bash
curl -X POST "https://api.telegram.org/bot<SUA_CHAVE_DO_BOT>/setWebhook?url=https://sua-url-ngrok/bot"
```

Acesse o Telegram, busque pelo seu bot (ex.: @AugFuriaBot) e digite `/start` para começar!

<h2 id="commands">📍 Comandos do Bot</h2>

Abaixo estão os principais comandos do FuriaBot e exemplos de interações. Cada comando concede **FURIA Cash** simbólico ($0,10) para engajamento, inspirado no bot de exemplo da Fúria.

| Comando                 | Descrição                                                                  |
| ----------------------- | -------------------------------------------------------------------------- |
| <kbd>/start</kbd>       | Inicia o bot com uma saudação vibrante. Veja [detalhes](#start-detail)     |
| <kbd>/menu</kbd>        | Lista todos os comandos disponíveis. Veja [detalhes](#menu-detail)         |
| <kbd>/calendario</kbd>  | Exibe agenda de jogos (mockada). Veja [detalhes](#calendario-detail)       |
| <kbd>/resultados</kbd>  | Mostra resultados recentes (mockados). Veja [detalhes](#resultados-detail) |
| <kbd>/curiosidade</kbd> | Fornece um fato sobre o time. Veja [detalhes](#curiosidade-detail)         |
| <kbd>/quiz</kbd>        | Inicia um quiz interativo. Veja [detalhes](#quiz-detail)                   |
| <kbd>/dica</kbd>        | Dá uma dica de CS. Veja [detalhes](#dica-detail)                           |
| <kbd>/streamers</kbd>   | Lista streamers da Fúria. Veja [detalhes](#streamers-detail)               |
| <kbd>/loja</kbd>        | Fornece link para a loja oficial. Veja [detalhes](#loja-detail)            |

<h3 id="start-detail">/start</h3>

**RESPOSTA**

```plaintext
🐾 Fala, guerreiro(a)! Sou o FuriaBot da FURIA! 🔥
Quer saber do próximo jogo ou detonar num quiz? Digite /menu
💰 Ganhou $0,10 FURIA Cash! Saldo: $0.10
⚠ FuriaBot em beta, pode ter uns bugs!
```

<h3 id="menu-detail">/menu</h3>

**RESPOSTA**

```plaintext
🔥 Menu do FuriaBot 🔥
/calendario - Próximos jogos da Fúria
/resultados - Resultados recentes
/curiosidade - Fatos sobre o time
/quiz - Teste seus conhecimentos
/dica - Dicas de CS
/streamers - Nossos streamers
/loja - Loja oficial
💰 Complete ações pra ganhar FURIA Cash!
⚠ FuriaBot em beta, pode ter uns bugs!
```

<h3 id="calendario-detail">/calendario</h3>

**RESPOSTA**

```plaintext
🗓 Próximos jogos da FURIA:

📅 2025-04-26 18:00
⚔ FURIA vs MIBR
🏆 Blast Premier

📅 2025-04-27 15:00
⚔ FURIA vs LOUD
🏆 Major Qualifier

💰 Ganhou $0,10 FURIA Cash! Saldo: $0.10
⚠ FuriaBot em beta, pode ter uns bugs!
```

<h3 id="resultados-detail">/resultados</h3>

**RESPOSTA**

```plaintext
🏅 Resultados recentes da FURIA:

📅 2025-04-20
⚔ FURIA 2 x 1 LOUD
🗺 Mapa: Mirage

📅 2025-04-18
⚔ FURIA 0 x 2 Imperial
🗺 Mapa: Nuke

💰 Ganhou $0,10 FURIA Cash! Saldo: $0.20
⚠ FuriaBot em beta, pode ter uns bugs!
```

<h3 id="curiosidade-detail">/curiosidade</h3>

**RESPOSTA**

```plaintext
🧠 Curiosidade: FalleN é o IGL lendário que guia a FURIA com estratégias brabas! 🏆

💰 Ganhou $0,10 FURIA Cash! Saldo: $0.70
⚠ FuriaBot em beta, pode ter uns bugs!
```

<h3 id="quiz-detail">/quiz</h3>

**RESPOSTA**

```plaintext
🎮 Quiz da FURIA! (2/3)

Quem é o IGL da FURIA em 2025?
A) KSCERATO
B) FalleN
C) molodoy

[Botões interativos: A | B | C]
```

**RESULTADO FINAL**

```plaintext
🎮 Fim do Quiz! Você acertou 3/3! É uma pantera! 🐆

💰 Ganhou $0.30 FURIA Cash! Saldo: $1.10
⚠ FuriaBot em beta, pode ter uns bugs!
```

<h3 id="dica-detail">/dica</h3>

**RESPOSTA**

```plaintext
💡 Dica de CS: Comunique sempre com seu time pra coordenar jogadas! 📡

💰 Ganhou $0,10 FURIA Cash! Saldo: $1.40
⚠ FuriaBot em beta, pode ter uns bugs!
```

<h3 id="streamers-detail">/streamers</h3>

**RESPOSTA**

```plaintext
🎥 Streamers da FURIA:
Brino: https://www.twitch.tv/brino
Cris Guedes: https://www.twitch.tv/crisguedes
Ivd Maluco: https://www.twitch.tv/ivdmaluco
Manel: https://www.twitch.tv/omanelzin_
Murillo: https://www.twitch.tv/murillomellobr
Noobzim: https://www.twitch.tv/noooobzim
Paula Nobre: https://www.twitch.tv/paulanobre
Pokiz: https://www.twitch.tv/pOkizGames
Rafinha: https://www.twitch.tv/raf1nhafps
Sofia Espanha: https://www.twitch.tv/sofiaespanha/
Thiago sem T: https://www.twitch.tv/thiagosemtlives, https://www.youtube.com/@thiagosemt
Xarola: https://www.twitch.tv/xarola_

💰 Ganhou $0,10 FURIA Cash! Saldo: $0.10
⚠ FuriaBot em beta, pode ter uns bugs!
```

<h3 id="loja-detail">/loja</h3>

**RESPOSTA**

```plaintext
🛒 Loja da Pantera: https://furia.gg
Confere os looks brabos! 😎

💰 Ganhou $0,10 FURIA Cash! Saldo: $0.10
⚠ FuriaBot em beta, pode ter uns bugs!
```

<h2 id="contribute">📫 Contribuir</h2>

Contribuições são bem-vindas! Veja como você pode ajudar a melhorar o FuriaBot:

1. Clone o repositório:
   ```bash
   git clone https://github.com/augolv/furia-bot
   ```
2. Crie uma nova branch:
   ```bash
   git checkout -b feature/sua-feature
   ```
3. Siga o padrão [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) para commits (ex.: `feat: add /noticias command`).
4. Abra um Pull Request descrevendo suas alterações, incluindo capturas de tela para mudanças visuais, e aguarde revisão!

<h3>Recursos Úteis</h3>

- [📝 Como Criar um Pull Request](https://www.atlassian.com/git/tutorials/making-a-pull-request)
- [💾 Padrão Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
