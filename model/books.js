
const db = require('../database/database.js')

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
console.log('books')
function listBooks(){
    return select_all_books.all()
}

console.log(listBooks())

module.exports={listBooks}