const { Scenes } = require("telegraf");
const client = require("../utils/client");

const scene = new Scenes.BaseScene("search");

scene.enter((ctx) => {
  ctx.reply("So'z yuboring");

  scene.on("text", async (ctx) => {
    ctx.session.page = 1;
    const query = ctx.message.text;
    let result = await client.photos.search({ query, page: 2, per_page: 5 });
    console.log(result);
    let inputMedia = [];

    result.photos.map((photo) => {
      inputMedia.push({ type: "photo", media: photo.src.original });
    });

    // console.log(inputMedia);

    await ctx.replyWithMediaGroup(inputMedia);
  });
});

module.exports = scene;
