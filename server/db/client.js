const { Client } = require("pg");
// const client = new Client("postgres://localhost:54321/websitebuilder");
const client = new Client("postgres://websitebuilder_qcsf_user:zYlmLBZXBsdybYG7J1CmQwEUUvBdUYmX@dpg-co6s2dmn7f5s739bp2e0-a/websitebuilder_qcsf");

module.exports = client;
