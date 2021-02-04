const getQuerySearch = require("../helper/parseLink");

function getQuerySearchIntegerObject(currentUrl) {
   const objectInteger = {};
   const querySearch = getQuerySearch(currentUrl);

   if (querySearch === -1) return objectInteger;

   for (let [key, value] of querySearch) {
      if (
         isNaN(value.trim()) === false &&
         Number.isInteger(parseFloat(value.trim())) === true
      ) {
         objectInteger[key] = parseInt(value.trim(), 10);
      } else {
         objectInteger[key] = undefined;
      }
   }

   return objectInteger;
}

function getQuerySearchIntegerArray(currentUrl) {
   const arrayInteger = [];
   const querySearch = getQuerySearch(currentUrl);

   if (querySearch === -1) return arrayInteger;

   querySearch.forEach((value) => {
      if (
         isNaN(value.trim()) === false &&
         Number.isInteger(parseFloat(value.trim())) === true
      ) {
         arrayInteger.push(parseInt(value.trim(), 10));
      } else {
         arrayInteger.push(undefined);
      }
   });

   return arrayInteger;
}

function getQuerySearchIntegerArrayObject(currentUrl) {
   let objectInteger = {};
   const arrayInteger = [];
   const querySearch = getQuerySearch(currentUrl);

   if (querySearch === -1) return arrayInteger;

   for (let [key, value] of querySearch) {
      if (
         isNaN(value.trim()) === false &&
         Number.isInteger(parseFloat(value.trim())) === true
      ) {
         objectInteger[key] = parseInt(value.trim(), 10);
      } else {
         objectInteger[key] = undefined;
      }

      arrayInteger.push(objectInteger);
      objectInteger = {};
   }

   return arrayInteger;
}

module.exports = function (format, currentUrl) {
   if (format === "object") {
      return getQuerySearchIntegerObject(currentUrl);
   } else if (format === "array") {
      return getQuerySearchIntegerArray(currentUrl);
   } else if (format === "arrayObject") {
      return getQuerySearchIntegerArrayObject(currentUrl);
   } else {
      throw new Error(`"${format} Format Not Found"`);
   }
};
