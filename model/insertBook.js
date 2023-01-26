//addBookToDB(new_book) //new_book is {}
const db = require("../database/database");

const insert_book = db.prepare(/*sql*/ `
  INSERT INTO books(name, author_id, year, genres_id)
  VALUES(
    $name,
    $author_id,
    $year,
    $genres_id
  )
  RETURNING id
`);

function addBookToDB(book) {
  return insert_book.get(book);
}

module.exports = { addBookToDB };

//we are handling the form input (bname, aname, yor, genre) to be placed into the DB
//using insert in SQL
