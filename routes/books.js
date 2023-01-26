//has search and sort function
const { htmlTemplate } = require('../templates/html');
const {booksTemplate} = require('../templates/booksTemplate');
const {sortform} = require('../templates/forms');
const booksReq = require('../model/books');
const options = require('./sort');



function books(request, response) {
	
	const sortForm = sortform(options);
	const booksList = booksTemplate(booksReq.listBooks());

	const body = htmlTemplate('Books', sortForm.concat(booksList), 'Add book', '/add-book')
	response.send(body);
}

function sortBooks(request, response){	
	const sortForm=sortform(options);
	const {sort_by}= request.body;

	let bookList;
	if(sort_by==='default'){
		booksList = booksTemplate(booksReq.listBooks());
	}
	if(sort_by==='name'){
		booksList = booksTemplate(booksReq.sortBooksByTitle());
	}
	if(sort_by==='year'){
		booksList = booksTemplate(booksReq.sortBooksByYear());
	}

	
	const body = htmlTemplate('Books', sortForm.concat(booksList), 'Add book', '/add-book');
	response.send(body)

}
module.exports = { books, sortBooks };