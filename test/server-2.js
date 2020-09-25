const express = require('express');
const getQuerySearch = require('../utils/string');
const floatQuerySearch = require('../utils/float');
const intQuerySearch = require('../utils/int');
const app = express();


app.get('/', (req, res) => {
   const numIntObj = intQuerySearch('object', req.url);
   const numIntArr = intQuerySearch('array', req.url);
   const objArr = intQuerySearch('arrayObject', req.url);

   console.log(numIntObj);
   console.log(numIntArr);
   console.log(objArr);

   res.send('Hello, get-it');
});


app.listen(4000, () => {
   console.log(`Server started on 4000`);
});