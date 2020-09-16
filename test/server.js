const http = require('http');
const { getQueryString, getArrObjectString, getArrayQueryString } = require('../utils/string');
const { getQueryNumber, getArrObjectNumber, getArrayQueryNumber } = require('../utils/int');

const server = http.createServer((req, res) => {
   if (req.url === '/profile?name=farhan&age=19&address=Indonesian') {
      console.log(getQueryString(req.url));
      console.log(getArrObjectString(req.url));
      console.log(getArrayQueryString(req.url));

      res.end('Hello get-it');
   }

   if (req.url === '/products?pageStart=4&pageEnd=100') {
      console.log(getQueryNumber(req.url));
      console.log(getArrObjectNumber(req.url));
      console.log(getArrayQueryNumber(req.url));

      res.end('Hello, get-it');
   }
});

server.listen(4600, () => {
   console.log(`Server running at 4600....`);
});
