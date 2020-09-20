const getQuerySearch = require('../helper/getQuerySearch');

module.exports = (format, currentUrl) => {
   if (format === 'object') {
      return getQuerySearchIntegerObject(currentUrl);
   }

   if (format === 'array') {
      return getQuerySearchIntegerArray(currentUrl);
   }

   if (format === 'arrayObject') {
      return getQuerySearchIntegerArrayObject(currentUrl);
   }
}

function getQuerySearchIntegerObject(currentUrl) {
   const queryNumber = {};
   const querySearch = getQuerySearch(currentUrl);

   for (let [key, value] of querySearch) {
      if (value === "" || isNaN(value) === true) {
         queryNumber[key] = null;

      } else {
         queryNumber[key] = parseInt(value, 10);
      }
   }

   return queryNumber;
}

function getQuerySearchIntegerArray(currentUrl) {
   const arrQueryNumber = [];
   const querySearch = getQuerySearch(currentUrl);

   querySearch.forEach((value) => {
      if (value === "" || isNaN(value) === true) {
         arrQueryNumber.push(null);

      } else {
         arrQueryNumber.push(parseInt(value, 10));
      }
   });

   return arrQueryNumber;
}

function getQuerySearchIntegerArrayObject(currentUrl) {
   let queryNumber = {};
   const arrQueryNumber = [];
   const urlParams = getQuerySearch(currentUrl);

   for (let [key, value] of urlParams) {
      if (value === "" || isNaN(value) === true) {
         queryNumber[key] = null;

      } else {
         queryNumber[key] = parseInt(value, 10);
      }

      arrQueryNumber.push(queryNumber);
      queryNumber = {};
   }

   return arrQueryNumber;
}
