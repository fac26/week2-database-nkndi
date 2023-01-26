const db = require("../database/database.js");

const select_all_books = db.prepare(/*sql*/ `
    SELECT 
    books.id, 
    books.name,
    books.year,
    genres.name AS genres_name,
    authors.name AS author_name
    FROM books
    JOIN genres ON books.genres_id = genres.id
    JOIN authors ON books.author_id = authors.id
`);

function listBooks() {
  return select_all_books.all();
}

const sort_by_title_books = db.prepare(/*sql*/ `
    SELECT 
    books.id, 
    books.name,
    books.year,
    genres.name AS genres_name,
    authors.name AS author_name
    FROM books
    JOIN genres ON books.genres_id = genres.id
    JOIN authors ON books.author_id = authors.id
    ORDER BY books.name ASC
`);

function sortBooksByTitle() {
  return sort_by_title_books.all();
}

const sort_by_year_books = db.prepare(/*sql*/ `
    SELECT 
    books.id, 
    books.name,
    books.year,
    genres.name AS genres_name,
    authors.name AS author_name
    FROM books
    JOIN genres ON books.genres_id = genres.id
    JOIN authors ON books.author_id = authors.id
    ORDER BY books.year ASC
`);

function sortBooksByYear() {
  return sort_by_year_books.all();
}

const sort_by_author_books = db.prepare(/*sql*/ `
    SELECT 
    books.id, 
    books.name,
    books.year,
    genres.name AS genres_name,
    authors.name AS author_name
    FROM books
    JOIN genres ON books.genres_id = genres.id
    JOIN authors ON books.author_id = authors.id
    ORDER BY authors.name ASC
`);

function sortBooksAuthor() {
  return sort_by_author_books.all();
}

module.exports = {
  listBooks,
  sortBooksByTitle,
  sortBooksByYear,
  sortBooksAuthor,
};
