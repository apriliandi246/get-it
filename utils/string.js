const getParams = require('../helper/getParams');

module.exports.getQueryString = (currentUrl) => {
   const queryString = {};
   const urlParams = getParams(currentUrl);

   for (let [key, value] of urlParams) {
      queryString[key] = (!value ? null : value.toString());
   }

   return queryString;
}

module.exports.getArrayQueryString = (currentUrl) => {
   const arrQueryString = [];
   const urlParams = getParams(currentUrl);

   urlParams.forEach((string) => !string ? arrQueryString.push(null) : arrQueryString.push(string.toString()));

   return arrQueryString;
}

module.exports.getArrObjectString = (currentUrl) => {
   let queryString = {};
   const arrQueryString = [];
   const urlParams = getParams(currentUrl);

   for (let [key, value] of urlParams) {
      queryString[key] = (!value ? null : value.toString());
      arrQueryString.push(queryString);
      queryString = {};
   }

   return arrQueryString;
}
