//has search and sort function
const { htmlTemplate } = require('../templates/html');
const {booksTemplate} = require('../templates/booksTemplate');
const booksReq = require('../model/books');

function books(request, response) {

	const body = htmlTemplate('Books', booksTemplate(booksReq.listBooks()), 'Add book', '/add-book')
	response.send(body);
}

module.exports = { books };