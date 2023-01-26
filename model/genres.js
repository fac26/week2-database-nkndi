const db = require("../database/database.js");

const selectall_Genres = db.prepare(
  /*sql*/
  `SELECT
id, name FROM genres`
);

function listGenres() {
  return selectall_Genres.all();
}

const select_Genre = db.prepare(
  /*sql*/
  `SELECT
id, name FROM genres WHERE id LIKE ? `
);

function getGenre(genre_id) {
  return select_Genre.get(genre_id);
}
module.exports = { listGenres, getGenre };
