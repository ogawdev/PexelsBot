require("dotenv").config();

const bot = require("./core/bot");
const session = require("./core/session");
const stage = require("./scenes");
const startBot = require("./utils/startBot");

bot.catch((err, ctx) => {
  console.log(`Ooops, encountered an error for ${ctx.updateType}`, err);
  ctx.reply("Something went wrong");
  ctx.scene.enter("menu");
});

bot.use(session);
bot.use(stage.middleware());

bot.start((ctx) => ctx.scene.enter("start"));
bot.on("text", (ctx) => console.log(ctx.message));
startBot(bot);
