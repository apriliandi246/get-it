const getQuerySearch = require('../helper/getQuerySearch');

module.exports = (format, currentUrl) => {
   if (format === 'object') return getQuerySearchStringObject(currentUrl);
   if (format === 'array') return getQuerySearchStringArray(currentUrl);
   if (format === 'arrayObject') return getQuerySearchStringArrayObject(currentUrl);
}

function getQuerySearchStringObject(currentUrl) {
   const objectString = {};
   const querySearch = getQuerySearch(currentUrl);

   for (let [key, value] of querySearch) {
      objectString[key] = (value === "" ? null : value.toString());
   }

   return objectString;
}

function getQuerySearchStringArray(currentUrl) {
   const arrayString = [];
   const querySearch = getQuerySearch(currentUrl);

   querySearch.forEach((value) => {
      value === "" ? arrayString.push(null) : arrayString.push(value.toString())
   });

   return arrayString;
}

function getQuerySearchStringArrayObject(currentUrl) {
   let objectString = {};
   const arrayString = [];
   const querySearch = getQuerySearch(currentUrl);

   for (let [key, value] of querySearch) {
      objectString[key] = (value === "" ? null : value.toString());
      arrayString.push(objectString);
      objectString = {};
   }

   return arrayString;
}
