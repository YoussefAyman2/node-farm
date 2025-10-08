const fs = require('fs');
const http = require('http');
const url = require('url');
const replaceTemplate = require('./replaceTemplate');
const httpServer = http.createServer();
const port = 3000;
const productObj = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')
);
const tempOverview = fs.readFileSync(
  `${__dirname}/templates/overview.html`,
  'utf-8'
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  'utf-8'
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/product.html`,
  'utf-8'
);

httpServer
  .on('request', (request, response) => {
    let { query, pathname: pathName } = url.parse(request.url, true);
    if (pathName === '/' || pathName === '/overview') {
      response.writeHead(200, { 'Content-type': 'text/html' });
      const cardsHtml = productObj
        .map((el) => replaceTemplate(tempCard, el))
        .join('');
      const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
      response.end(output);
    } else if (pathName === '/product') {
      const product = productObj[query.id];
      response.writeHead(200, { 'Content-type': 'text/html' });
      const output = replaceTemplate(tempProduct, product);
      response.end(output);
    } else if (pathName === '/api') {
      response.writeHead(200, { 'Content-type': 'application/json' });
      response.end(JSON.stringify(productObj));
    } else {
      response.writeHead(404, { 'Content-type': 'text/html' });
      response.end('<b>Page Not Found!!</b>');
    }
  })
  .listen(port, '127.0.0.1', () => {
    console.log(`Listining is starting on ${port}...`);
  });
