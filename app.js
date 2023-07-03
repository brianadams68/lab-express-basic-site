const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/home', (request, response, next) => {
  console.log(request);
  response.send('<h1>First lab</h1>');
});

app.get('/about', (request, response) => {
  response.send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>About</title>
        <link rel="stylesheet" href="/stylesheets/style.css" />
      </head>
      <body>
      <h1>About Me!</h1>
      <p>I'm Brian from Buenos Aires, Argentina</p>
      <img src="/images/brian.JPG" alt="">
      </body>
    </html>
  `);
});

app.get('/person', (request, response, next) => {
  response.send(`
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Me</title>
          <link rel="stylesheet" href="/stylesheets/style.css" />
        </head>
        <body>
          <h1>Me</h1>
          <p>This is my second route</p>
        </body>
      </html>
    `);
});

app.get('/works', (request, response) => {
  response.send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Works</title>
        <link rel="stylesheet" href="/stylesheets/style.css" />
      </head>
      <body>
        <h1>Work</h1>
        <p>I've worked in logistic for more tha 3 years</p>
      </body>
    </html>
  `);
});

app.listen(3000, () => console.log('My first app listening on port 3000! '));
