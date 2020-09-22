const getQuerySearch = require('../helper/getQuerySearch');

module.exports = (format, currentUrl) => {
   if (format === 'object') return getQuerySearchFloatObject(currentUrl);
   if (format === 'array') return getQuerySearchFloatArray(currentUrl);
   if (format === 'arrayObject') return getQuerySearchFloatArrayObject(currentUrl);
}

function getQuerySearchFloatObject(currentUrl) {
   const objectFloat = {};
   const querySearch = getQuerySearch(currentUrl);

   for (let [key, value] of querySearch) {
      if (isNaN(value.trim()) === false && Number.isInteger(parseFloat(value.trim())) === false) {
         objectFloat[key] = parseFloat(value.trim());

      } else {
         objectFloat[key] = null
      }
   }

   return objectFloat;
}

function getQuerySearchFloatArray(currentUrl) {
   const arrayFloat = [];
   const querySearch = getQuerySearch(currentUrl);

   querySearch.forEach((value) => {
      if (isNaN(value.trim()) === false && Number.isInteger(parseFloat(value.trim())) === false) {
         arrayFloat.push(parseFloat(value.trim()));

      } else {
         arrayFloat.push(null);
      }
   });

   return arrayFloat;
}

function getQuerySearchFloatArrayObject(currentUrl) {
   let objectFloat = {};
   const arrayFloat = [];
   const querySearch = getQuerySearch(currentUrl);

   for (let [key, value] of querySearch) {
      if (isNaN(value.trim()) === false && Number.isInteger(parseFloat(value.trim())) === false) {
         objectFloat[key] = parseFloat(value.trim());

      } else {
         objectFloat[key] = null;
      }

      arrayFloat.push(objectFloat);
      objectFloat = {};
   }

   return arrayFloat;
}
