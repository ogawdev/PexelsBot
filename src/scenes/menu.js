const { Scenes, Markup } = require("telegraf");

const scene = new Scenes.BaseScene("menu");

scene.enter((ctx) => {
  ctx.reply(
    "Bosh menu",
    Markup.keyboard([
      ["Search", "Random"],
      ["Aloqa", "Settings"],
    ]).resize()
  );

  scene.hears("Search", (ctx) => ctx.scene.enter("search"));
});

module.exports = scene;
