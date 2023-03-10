function htmlTemplate(title, content, linkname, linkpath) {
  const body = /*html*/ `
        
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/style.css">
        <title>${title}</title>
    </head>
    <body>
        <a class="link" href="${linkpath}">${linkname}</a>
        <main>
            ${content}
        </main>
    </body>
    </html>
    `;

  return body;
}

module.exports = { htmlTemplate };
