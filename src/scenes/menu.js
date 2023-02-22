const { Scenes, Markup } = require("telegraf");
const client = require("../utils/client");

const scene = new Scenes.BaseScene("menu");

scene.enter((ctx) => {
  ctx.reply(
    "Bosh menu",
    Markup.keyboard([
      ["Search", "Random"],
    ]).resize()
  );

  scene.hears("Search", (ctx) => ctx.scene.enter("search"));
  scene.hears("Random", async (ctx) => {
    let words = [
      "Landscape",
      "Space",
      "Forest",
      "Car",
      "City",
      "Mountain",
      "Beautiful",
      "Nature",
      "Sky",
      "Food",
      "Beach",
      "Ocean",
      "Flowers",
      "Animal",
      "Abstract",
      "Cute",
      "pink",
      "pretty",
      "baby",
      "cute baby",
      "cute animals"
    ];

    let query = words[Math.floor(Math.random() * words.length)];

    let page = Math.floor(Math.random() * 200) + 1;

    let result = await client.photos.search({
      query,
      page,
      per_page: 4,
    });

    let inputMedia = [];
    result.photos.map((photo) => {
      inputMedia.push({
        type: "photo",
        media: photo.src.large2x,
      });
    });

    await ctx.replyWithMediaGroup(inputMedia);
  });
});

module.exports = scene;
