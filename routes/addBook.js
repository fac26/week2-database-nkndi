const {htmlTemplate} = require('../templates/html');
const forms = require('../templates/forms');

const genres = require('../model/genres')


function addBook(request, response) {

	const body = htmlTemplate('Add book', forms.addbookform(genres.listGenres()), 'All books', '/')
	response.send(body);
}

module.exports = { addBook };

//has addbook function using name, author name, year of issue, genre
//addbook function will import forms from templates/forms.js

//validate