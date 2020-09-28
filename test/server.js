const http = require('http');
const getFloatQuerySearch = require('../utils/float');
const getIntegerQuerySearch = require('../utils/int');
const getStringQuerySearch = require('../utils/string');

http.createServer((req, res) => {
   if (req.url === '/') {
      res.setHeader('Content-Type', 'text/html');
      res.write(`<a href="/profile?name=farhan&age=20">String</a> <br><br>`);
      res.write(`<a href="/products?pageStart=4&pageEnd=">Integer</a> <br><br>`);
      res.write(`<a href="/products?value=1.2&num=24.6&num1=246&age=farhan">Float</a>`);
      res.end();
   }

   if (req.url === '/profile?name=farhan&age=20') {
      console.log(getStringQuerySearch('object', req.url));
      console.log(getStringQuerySearch('array', req.url));
      console.log(getStringQuerySearch('arrayObject', req.url));

      res.end('Hello, get-it (String). Check in your terminal');
   }

   if (req.url === '/products?pageStart=4&pageEnd=') {
      console.log(getIntegerQuerySearch('object', req.url));
      console.log(getIntegerQuerySearch('array', req.url));
      console.log(getIntegerQuerySearch('arrayObject', req.url));

      res.end('Hello, get-it (Integer). Check in your terminal');
   }

   if (req.url === '/products?value=1.2&num=24.6&num1=246&age=farhan') {
      console.log(getFloatQuerySearch('object', req.url));
      console.log(getFloatQuerySearch('array', req.url));
      console.log(getFloatQuerySearch('arrayObject', req.url));

      res.end('Hello, get-it (Float). Check in your terminal');
   }
})
   .listen(4600, () => {
      console.log(`Server running at 4600....`);
   });
