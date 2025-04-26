<h1 align="center" style="font-weight: bold;">FuriaBot 💻</h1>

<p align="center">
 <a href="#tech">Tecnologias</a> • 
 <a href="#started">Como Começar</a> • 
 <a href="#commands">Comandos do Bot</a> • 
 <a href="#contribute">Contribuir</a>
</p>

<p align="center">
    <b>FuriaBot é um chatbot no Telegram que engaja fãs do time de Counter-Strike da Fúria com informações sobre jogos, quizzes interativos, dicas de CS e links para streamers e loja oficial. Desenvolvido para o desafio "Experiência Conversacional" da Fúria.</b>
</p>

<h2 id="tech">💻 Tecnologias</h2>

- **Backend**:
  - Node.js
  - node-telegram-bot-api
  - dotenv
- **Ferramentas**:
  - Git
  - npm

<h2 id="started">🚀 Como Começar</h2>

Aqui estão as instruções para rodar o FuriaBot localmente na sua máquina.

<h3>Pré-requisitos</h3>

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

Inicie o bot localmente:

```bash
cd furia-bot
npm install
node bot.js
```

Acesse o Telegram, busque pelo seu bot (ex.: @FuriaBot) e digite `/start` para começar!

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

💰 Ganhou $0,10 FURIA Cash! Saldo: $0,10
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

💰 Ganhou $0,10 FURIA Cash! Saldo: $0,20
⚠ FuriaBot em beta, pode ter uns bugs!
```

<h3 id="curiosidade-detail">/curiosidade</h3>

**RESPOSTA**

```plaintext
🧠 Curiosidade: KSCERATO é o rei dos clutches em Majors! 🔥
💰 Ganhou $0,10 FURIA Cash! Saldo: $0,30
⚠ FuriaBot em beta, pode ter uns bugs!
```

<h3 id="quiz-detail">/quiz</h3>

**RESPOSTA**

```plaintext
🎮 Quiz da FURIA! Responda com A, B ou C:

1. Quem é o IGL da Fúria?
A) KSCERATO
B) arT
C) yuurih

[Botões interativos: A | B | C]
```

**RESULTADO FINAL**

```plaintext
3/3! Você é uma pantera do CS! 🐆
💰 Ganhou $0,10 FURIA Cash! Saldo: $0,40
⚠ FuriaBot em beta, pode ter uns bugs!
```

<h3 id="dica-detail">/dica</h3>

**RESPOSTA**

```plaintext
💡 Dica de CS: Treine smokes na Mirage pra controlar o mid! 💣
💰 Ganhou $0,10 FURIA Cash! Saldo: $0,50
⚠ FuriaBot em beta, pode ter uns bugs!
```

<h3 id="streamers-detail">/streamers</h3>

**RESPOSTA**

```plaintext
🎥 Streamers da FURIA:
- Brino: https://twitch.tv/brino
- Paula Nobre: https://twitch.tv/paulanobre
- Rafinha: https://twitch.tv/raf1nhafps
💰 Ganhou $0,10 FURIA Cash! Saldo: $0,60
⚠ FuriaBot em beta, pode ter uns bugs!
```

<h3 id="loja-detail">/loja</h3>

**RESPOSTA**

```plaintext
🛒 Loja da Pantera: https://loja.furia.gg
Confere os looks brabos! 😎
💰 Ganhou $0,10 FURIA Cash! Saldo: $0,70
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
