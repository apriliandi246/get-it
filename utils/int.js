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
      if (isNaN(value.trim()) === false && Number.isInteger(parseFloat(value.trim())) === true) {
         objectInteger[key] = parseInt(value.trim(), 10);

      } else {
         objectInteger[key] = null;
      }
   }

   return objectInteger;
}

function getQuerySearchIntegerArray(currentUrl) {
   const arrayInteger = [];
   const querySearch = getQuerySearch(currentUrl);

   querySearch.forEach((value) => {
      if (isNaN(value.trim()) === false && Number.isInteger(parseFloat(value.trim())) === true) {
         arrayInteger.push(parseInt(value.trim(), 10));

      } else {
         arrayInteger.push(null);
      }
   });

   return arrayInteger;
}

function getQuerySearchIntegerArrayObject(currentUrl) {
   let objectInteger = {};
   const arrayInteger = [];
   const urlParams = getQuerySearch(currentUrl);

   for (let [key, value] of urlParams) {
      if (isNaN(value.trim()) === false && Number.isInteger(parseFloat(value.trim())) === true) {
         objectInteger[key] = parseInt(value.trim(), 10);

      } else {
         objectInteger[key] = null;
      }

      arrayInteger.push(objectInteger);
      objectInteger = {};
   }

   return arrayInteger;
}
