//has search and sort function
const { htmlTemplate } = require('../templates/html');
//const {form} = require('../templates/form');


function books(request, response) {

	const body = htmlTemplate('Books')
	response.send(body);
}

module.exports = { books };