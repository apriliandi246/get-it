const getQuerySearch = require('../helper/getQuerySearch');

module.exports = (format, currentUrl) => {
   if (format === 'object') return getQuerySearchIntegerObject(currentUrl);
   if (format === 'array') return getQuerySearchIntegerArray(currentUrl);
   if (format === 'arrayObject') return getQuerySearchIntegerArrayObject(currentUrl);
}

function getQuerySearchIntegerObject(currentUrl) {
   const objectInteger = {};
   const querySearch = getQuerySearch(currentUrl);

   for (let [key, value] of querySearch) {
      if (value === "" || isNaN(value) === true) {
         objectInteger[key] = null;

      } else {
         objectInteger[key] = parseInt(value, 10);
      }
   }

   return objectInteger;
}

function getQuerySearchIntegerArray(currentUrl) {
   const arrayInteger = [];
   const querySearch = getQuerySearch(currentUrl);

   querySearch.forEach((value) => {
      if (value === "" || isNaN(value) === true) {
         arrayInteger.push(null);

      } else {
         arrayInteger.push(parseInt(value, 10));
      }
   });

   return arrayInteger;
}

function getQuerySearchIntegerArrayObject(currentUrl) {
   let objectInteger = {};
   const arrayInteger = [];
   const urlParams = getQuerySearch(currentUrl);

   for (let [key, value] of urlParams) {
      if (value === "" || isNaN(value) === true) {
         objectInteger[key] = null;

      } else {
         objectInteger[key] = parseInt(value, 10);
      }

      arrayInteger.push(objectInteger);
      objectInteger = {};
   }

   return arrayInteger;
}
