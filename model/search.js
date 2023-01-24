const db = require("../database/database.js");

const search_books = db.prepare(/*sql*/ `
  SELECT
    id,
    name
  FROM books
  WHERE name LIKE ?
`);

function searchBooks(search_book) {
  return search_books.all("%" + search_book + "%");
}

module.exports = {searchBooks}