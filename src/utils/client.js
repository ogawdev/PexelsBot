const { createClient } = require("pexels");
const { API_KEY } = require("./config");

const client = createClient(API_KEY);

module.exports = client;
