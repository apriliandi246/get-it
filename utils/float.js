const getQuerySearch = require('../helper/getQuerySearch');

module.exports = (format, currentUrl) => {
   if (format === 'object') {
      return getQuerySearchFloatObject(currentUrl);
   }

   if (format === 'array') {
      return getQuerySearchFloatArray(currentUrl);
   }

   if (format === 'arrayObject') {
      return getQuerySearchFloatArrayObject(currentUrl);
   }
}

function getQuerySearchFloatObject(currentUrl) {
   const queryFloat = {};
   const querySearch = getQuerySearch(currentUrl);

   for (let [key, value] of querySearch) {
      if (isNaN(value) === false) {
         const floatNumber = parseFloat(value);
         const isInteger = Number.isInteger(floatNumber);

         if (isInteger === false) {
            queryFloat[key] = floatNumber;

         } else {
            queryFloat[key] = null
         }
      }
   }

   return queryFloat;
}

function getQuerySearchFloatArray(currentUrl) {
   const arrQueryFloat = [];
   const querySearch = getQuerySearch(currentUrl);

   querySearch.forEach((value) => {
      if (isNaN(value) === false) {
         const floatNumber = parseFloat(value);
         const isInteger = Number.isInteger(floatNumber);

         if (isInteger === false) {
            arrQueryFloat.push(floatNumber);

         } else {
            arrQueryFloat.push(null);
         }
      }
   });

   return arrQueryFloat;
}

function getQuerySearchFloatArrayObject(currentUrl) {
   let queryFloat = {};
   const arrQueryFloat = [];
   const querySearch = getQuerySearch(currentUrl);

   for (let [key, value] of querySearch) {
      const floatNumber = parseFloat(value);
      const isInteger = Number.isInteger(floatNumber);

      if (isNaN(value) === false && isInteger === false) {
         queryFloat[key] = floatNumber;

      } else {
         queryFloat[key] = null;
      }

      arrQueryFloat.push(queryFloat);
      queryFloat = {};
   }

   return arrQueryFloat;
}
