const { Client } = require("pg");
const client = new Client(`postgres://localhost:54321/websitebuilder`);

module.exports = client;
