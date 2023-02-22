const { Scenes, Markup } = require("telegraf");
const client = require("../utils/client");
const scene = new Scenes.BaseScene("search");

scene.enter((ctx) => {
  ctx.reply("Send a word", Markup.keyboard(["⬅️ Back"]).resize());

  scene.hears("⬅️ Back", (ctx) => ctx.scene.enter("menu"));

  scene.hears("next ➡️", async (ctx) => {
    const query = ctx.session.query;
    const page = ctx.session.page || 1;
    let result = await client.photos.search({
      query,
      page,
      per_page: 4,
    });

    ctx.session.page = page + 1;

    let inputMedia = [];
    result.photos.map((photo) => {
      inputMedia.push({
        type: "photo",
        media: photo.src.large2x,
      });
    });

    await ctx.replyWithMediaGroup(inputMedia);
  });

  scene.on("text", async (ctx) => {
    let page = Math.floor(Math.random() * 100) + 1;

    const query = ctx.message.text;
    let result = await client.photos.search({
      query,
      page,
      per_page: 4,
    });

    ctx.session.page = page + 1;
    ctx.session.query = query;

    let inputMedia = [];
    result.photos.map((photo) => {
      inputMedia.push({
        type: "photo",
        media: photo.src.large2x,
      });
    });

    await ctx.replyWithMediaGroup(inputMedia);
    await ctx.reply(
      "Click the button below to continue",
      Markup.keyboard([["⬅️ Back", "next ➡️"]]).resize()
    );
  });
});

module.exports = scene;
