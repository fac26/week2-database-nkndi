//me and niete

//two functions- one is the form (to add new books in db) 
//and the other is search to retrieve books like the food example-form to search for author_name
//sort-button on the search results in form element -need function for that 

//page on discord

//not writing functions here, just templates 

function addbookform(genres, errors={}) {
    const options = genres.map((gen) => `<option value="${gen.id}">
    ${gen.name}</option>`); 
    const formhtml = `
    <link rel="stylesheet" href="/style.css">
    <center><h1>Add a book</h1></center><br>
    <form method="POST">
    <p><label for="name">Book name:</label>
    <input name="name" id="name">
    ${validate(errors.name)}</p>
    <p><label for="author">Author name:</label>
    <input name="author" id="author">
    ${validate(errors.author)}</p>
    <p><label for="year">Year of release:</label>
    <input name="year" id="year">
    ${validate(errors.year)}</p>
    <p><label>Genre:</label> <br>
    <center><select name="genres_id">${options.join(" ")}</select></p></center>
    <br>
    <button>Add &plus;</button>
    </form>
    `;
    return formhtml; 
}

function validate(message) {
    if (message) {
      return `<span style="color: red">${message}</span>`;
    } else {
      return "";
    }
  }


module.exports = { addbookform }
