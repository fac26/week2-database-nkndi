const db = require("../database/database.js")

const selectall_Genres = db.prepare(/*sql*/
`SELECT
id, name FROM genres`
)

function listGenres(){
    return selectall_Genres.all();
}

module.exports = {listGenres}

