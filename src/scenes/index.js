const { Scenes } = require("telegraf");

const stage = new Scenes.Stage([
  require("./start"),
  require("./menu"),
  require("./search"),
]);

module.exports = stage;
