// table that appears from search results

function booksTemplate(books) {
  const booksUL = /*html*/ `
    <ul>${books.map(book=>bookTemplate(book)).join("")}</ul>
    `;
  return booksUL;
}

function bookTemplate(book) {
  const bookLI = /*html*/ `
    <li class="book"><p>${book.name}</p>
    <p>${book.year}</p>
    <p>${book.author_name}</p>
    <p>${book.genres_name}</p>
</li>
    `;
  return bookLI;
}

module.exports = { booksTemplate };
