const {htmlTemplate} = require('../templates/html');
const forms = require('../templates/forms');
//const {addBookToBD}= require('../model/insertBook');
const genres = require('../model/genres');
const {inserteAuthorToDB, getAuthorId}=require('../model/authors');



function addBook(request, response) {

	const body = htmlTemplate('Add book', forms.addbookform(genres.listGenres()), 'All books', '/')
	response.send(body);
}

function handleAddBook(request, response){
	let {name, author, year, genres_id} = request.body;
	
	const errors={};
	if(!name){
		errors.name = 'Please enter a title';
	}
	if(!year){
		errors.year = "Please enter a year of release";
	}

	if(!author){
		author = 'Unknown';
	}
	if(Object.keys(errors).length>0){

	} else {
		let author_id;
		const authorIdFromDB = getAuthorId(author);//back from db {id, name}

		if(!authorIdFromDB){
			author_id = inserteAuthorToDB({name: author}).id;
		} else {
			author_id=authorIdFromDB.id;
		}		

		const genre_name = genres.getGenre(genres_id);//{id, name}		
		const new_book = {name, author_id, year, genres_id};

		console.log('genre name', genre_name)
		console.log(new_book);
		console.log(author_id);
		//addBookToBD(new_book);
		response.redirect('/');
	}
	
}

module.exports = { addBook, handleAddBook };

//has addbook function using name, author name, year of issue, genre
//addbook function will import forms from templates/forms.js

//validate