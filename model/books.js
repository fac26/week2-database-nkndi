
const db = require('../database/database.js')

const select_all_books = db.prepare(/*sql*/ `
    SELECT name FROM authors
`);
console.log('books')
function listBooks(){
    return select_all_books.all()
}

console.log(listBooks())

module.exports={listBooks}