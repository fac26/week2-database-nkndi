function get(request, response) {
	response.send(`<h1>hello</h1>`);
}

module.exports = { get };

//has addbook function using name, author name, year of issue, genre
//addbook function will import forms from templates/forms.js