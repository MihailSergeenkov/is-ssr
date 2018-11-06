const express = require('express');

require('@babel/register');
require('@babel/polyfill');

const render = require('./render').default;
const app = express();

app.get('/', (req, res) => {
  const response = `
  <!DOCTYPE html>
  <html>
    <head>
        <title>Интернет магазин</title>
    </head>
    <body>
        <div id="root">${render()}</div>
    </body>
  </html>
  `;
  res.send(response)
});

app.listen(3001, () => console.log('Server is listening on 3001'));
