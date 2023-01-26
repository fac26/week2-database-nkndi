const { htmlTemplate } = require("../templates/html");
const forms = require("../templates/forms");

const genres = require("../model/genres");
const { inserteAuthorToDB, getAuthorId } = require("../model/authors");
const { addBookToDB } = require("../model/insertBook");

function addBook(request, response) {
  const body = htmlTemplate(
    "Add book",
    forms.addbookform(genres.listGenres()),
    "All books",
    "/"
  );
  response.send(body);
}

function handleAddBook(request, response) {
  let { name, author, year, genres_id } = request.body;

  const errors = {};
  if (!name) {
    errors.name = "Please enter a title";
  }
  if (!year || isNaN(Number(year))) {
    errors.year = "Please enter a year of release";
  }

  if (!author) {
    author = "Unknown";
  }
  if (Object.keys(errors).length > 0) {
    const body = htmlTemplate(
      "Add book",
      forms.addbookform(genres.listGenres(), errors),
      "All books",
      "/"
    );
    response.send(body);
  } else {
    name = sanitize(name);
    author = sanitize(author);
    year = sanitize(year);
    let author_id =
      getAuthorId(author)?.id || inserteAuthorToDB({ name: author }).id;

    //const genre_name = genres.getGenre(genres_id);//{id, name}
    const new_book = { name, author_id, year, genres_id };

    addBookToDB(new_book);
    response.redirect("/");
  }
}

function sanitize(input) {
  return input.replace(/</g, "&lt;");
}
module.exports = { addBook, handleAddBook };
