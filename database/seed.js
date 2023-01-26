const { readFileSync } = require("node:fs");
const { join } = require("node:path");
const db = require("./database.js");

const seedPath = join("database", "seed.sql");
const seed = readFileSync(seedPath, "utf-8");
db.exec(seed);
