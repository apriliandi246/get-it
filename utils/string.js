const getQuerySearch = require('../helper/getQuerySearch');

module.exports = (format, currentUrl) => {
   if (format === 'object') {
      return getQuerySearchStringObject(currentUrl);
   }

   if (format === 'array') {
      return getQuerySearchStringArray(currentUrl);
   }

   if (format === 'arrayObject') {
      return getQuerySearchStringArrayObject(currentUrl);
   }
}

function getQuerySearchStringObject(currentUrl) {
   const queryString = {};
   const querySearch = getQuerySearch(currentUrl);

   for (let [key, value] of querySearch) {
      queryString[key] = (value === "" ? null : value.toString());
   }

   return queryString;
}

function getQuerySearchStringArray(currentUrl) {
   const arrQueryString = [];
   const querySearch = getQuerySearch(currentUrl);

   querySearch.forEach((value) => {
      value === "" ? arrQueryString.push(null) : arrQueryString.push(value.toString())
   });

   return arrQueryString;
}

function getQuerySearchStringArrayObject(currentUrl) {
   let queryString = {};
   const arrQueryString = [];
   const querySearch = getQuerySearch(currentUrl);

   for (let [key, value] of querySearch) {
      queryString[key] = (value === "" ? null : value.toString());
      arrQueryString.push(queryString);
      queryString = {};
   }

   return arrQueryString;
}
