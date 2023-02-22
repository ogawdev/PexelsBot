const { Scenes } = require("telegraf");

const scene = new Scenes.BaseScene("start");

scene.enter((ctx) => {
  ctx.reply("Hello, you can upload great pictures through this bot");
  ctx.scene.enter("menu");
});

module.exports = scene;
