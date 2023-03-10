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
  CHECK (year >=(1600))

);

CREATE TABLE IF NOT EXISTS authors (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS book_names ON books(name);


COMMIT