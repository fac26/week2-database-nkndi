const db = require("../database/database");

const insert_author = db.prepare(`
  INSERT INTO authors (name)
  VALUES(
    $name
  )
  RETURNING id
`);

function inserteAuthorToDB(author) {
  return insert_author.get(author);
}

const select_Author = db.prepare(
  /*sql*/
  `SELECT
id, name FROM authors WHERE name LIKE ? `
);

function getAuthorId(name) {
  return select_Author.get(name);
}

module.exports = { inserteAuthorToDB, getAuthorId };
