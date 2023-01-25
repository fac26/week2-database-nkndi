# week2-database-nkndi

# Dominic-Karol-Natalia-Niete-database

A library app where you can add in your favourite books as recommendations for others.

## Setup

Make sure you have Git and Node (v18) installed.

1. Clone this repo and cd into the directory

2. Run `npm install` to install all the dependencies

3. Run `npm run dev` to start the server. Run `npm run dev-win` if using Windows.

4. Run `npm run seed` to create the database. Run `npm run seed-win` if using Windows.

This uses the nodemon library to auto-restart the server when you save changes.

## Testing

:construction: 

## User stories

### Core

- [X] As a friendly user I want to post a book recommendation for anyone to see
- [X] As a curious user I want to see other people's book recommendations

Stretch goal: 
- [ ] As an impatient user, I want to be able to search for books by name so I don't have to scroll through an entire library of book.

## Schema

<details>
  <summary>Schema Code</summary>

```js
BEGIN;

CREATE TABLE IF NOT EXISTS genres (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS books (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  author_id INTEGER REFERENCES authors(id),
  year INTEGER, 
  genres_id INTEGER REFERENCES genres(id)
);

CREATE TABLE IF NOT EXISTS authors (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS book_names ON books(name);


COMMIT
```
  
</details>


## Acceptance Criteria

- [x] A form for users to submit data
- [x] A page showing all the data
- [x] Semantic form elements with correctly associated labels
- [x] A SQLite database
- [x] A schema describing your database in your README
- [ ] Tests for server routes and database access
- [ ] Not process user input as SQL commands
- [x] Hidden environment variables (i.e. not on GitHub)

## Stretch criteria

- [ ] A way to view filtered/sorted data, instead of just all of it
    GitHub Actions CI setup to run your tests when you push






