require("dotenv").config();

const bot = require("./core/bot");
const session = require("./core/session");
const auth = require("./middleware/auth");
const stage = require("./scenes");
const mongo = require("./utils/mongo");
const startBot = require("./utils/startBot");

bot.catch((err, ctx) => {
  console.log(`Ooops, encountered an error for ${ctx.updateType}`, err);
  ctx.reply("Something went wrong");
  ctx.scene.enter("menu");
});

(async () => {
  await mongo();
})();

bot.use(session);
bot.use(stage.middleware());
bot.use(auth);

bot.start((ctx) => ctx.scene.enter("start"));
bot.on("text", (ctx) => console.log(ctx.message));
startBot(bot);
