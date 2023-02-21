const { Scenes } = require("telegraf");

const scene = new Scenes.BaseScene("start");

scene.enter((ctx) => {
  ctx.reply(
    "Assalomu alaykum bu sayt orqali ajoyib rasmlar yuklashingiz mumkin"
  );
  ctx.scene.enter("menu");
});

module.exports = scene;
