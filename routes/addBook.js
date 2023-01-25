const { htmlTemplate } = require('../templates/html');
const forms = require('../templates/forms');
const genres = require('../model/genres');
const { addBookToDB } = require('../model/insertBook');

function addBook(request, response) {
	const body = htmlTemplate('Add book', forms.addbookform(genres.listGenres()), 'All books', '/');
	response.send(body);
}

function submit(request, response) {
	const { name, author_id, year, genres_id } = request.body;
	const errors = {};
	if (!name) {
		errors.name = "Please enter a book name";
	}
	if (!author_id) {
		errors.id = "Please enter author id";
	}
	if (!year) {
		errors.yr = "Please enter a year of release";
	}
	if (!genres_id) {
		errors.id = "Please select a genre";
	}
	if (Object.keys(errors).length > 0) {
		const body = htmlTemplate('Add book', forms.addbookform(genres.listGenres()), 'All books', '/');
		response.status(400).send(body); //sending error message
	} else {
		const newBook = { name, author_id, year, genres_id };
		const { id } = addBookToDB(newBook);
		response.redirect(`/add-book/${id}`);
	}
}
module.exports = { addBook, submit };

//has addbook function using name, author name, year of issue, genre
//addbook function will import forms from templates/forms.js

//validate

//should change author_id to author_name