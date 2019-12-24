const { createServer } = require('http')
const axios = require('axios');
const express = require('express');
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

/*
app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl;

    if (pathname === '/a') {
      app.render(req, res, '/b', query)
    } else if (pathname === '/b') {
      app.render(req, res, '/a', query)
    } else {
      handle(req, res, parsedUrl)
    }
  }).listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
});

*/

app
    .prepare()
    .then(() => {

    const server = express();

        // 測試 url
        server.get('/user-:name', (req, res) => {

            return app.render(req, res, '/User', {
                name: req.params.name
            });

        });

        server.get('/memberList', async (req, res) => {

          const response = await axios.get('https://jsonplaceholder.typicode.com/todos'),
            data = response.data;

          return res.json(data);

        });

        server.get('/member', (req, res) => {

          return app.render(req, res, '/member');

        });

        server.get('*', (req, res) => {
            return handle(req, res);
        });

        server.listen(3000, err => {
            if (err) throw err;
            console.log('> Ready on http://localhost:3000');
        });

    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });
