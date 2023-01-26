
function addbookform(genres, errors={}) {
    const options = genres.map((gen) => `<option value="${gen.id}">
    ${gen.name}</option>`); 
    const formhtml = `<h1>Add a book</h1>
    <form method="POST">
    <p><label for="name">Book name:</label>
    <input name="name" id="name">
    ${validate(errors.name)}</p>
    <p><label for="author">Author name:</label>
    <input name="author" id="author">
    <p><label for="year">Year of release:</label>
    <input name="year" id="year">
    ${validate(errors.year)}</p>
    <p><label>Genre:</label>
    <select name="genres_id">${options.join(" ")}</select></p>
    <button>Add &plus;</button>
    </form>
    `;
    return formhtml; 
}

function sortform(sort_options) {
  let options='';
  for(const key in sort_options){
    options+=`<option value="${key}">${sort_options[key]}</option>`
  }
  const formhtml = `
  <form method="POST">
  <p><label>Sort by:</label>
  <select name="sort_by">${options}</select></p>
  <button>Sort</button>
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


module.exports = { addbookform, sortform}
