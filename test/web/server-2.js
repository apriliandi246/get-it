const express = require("express");
const strQuerySearch = require("../../utils/string");
const floatQuerySearch = require("../../utils/float");
const intQuerySearch = require("../../utils/int");
const app = express();


app.get("/", (req, res) => {
   const numIntObj = intQuerySearch("object", req.url);
   const numIntArr = intQuerySearch("array", req.url);
   const objArr = intQuerySearch("arrayObject", req.url);
   const exel = floatQuerySearch("exel", req.url);
   const str = strQuerySearch("array", req.url);

   console.log(numIntObj);
   console.log(numIntArr);
   console.log(objArr);
   console.log(exel)
   console.log(str)

   res.send("Hello, get-it");
});


app.listen(4000, () => {
   console.log(`Server started on 4000`);
});
