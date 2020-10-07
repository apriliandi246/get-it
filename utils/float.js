const getQuerySearch = require("../helper/getQuerySearch");


function getQuerySearchFloatObject(currentUrl) {
   const objectFloat = {};
   const querySearch = getQuerySearch(currentUrl);

   if (querySearch === -1) {
      return objectFloat;
   }

   for (let [key, value] of querySearch) {
      if (isNaN(value.trim()) === false && Number.isInteger(parseFloat(value.trim())) === false) {
         objectFloat[key] = parseFloat(value.trim());

      } else {
         objectFloat[key] = null;
      }
   }

   return objectFloat;
}

function getQuerySearchFloatArray(currentUrl) {
   const arrayFloat = [];
   const querySearch = getQuerySearch(currentUrl);

   if (querySearch === -1) {
      return arrayFloat;
   }

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

   if (querySearch === -1) {
      return arrayFloat;
   }

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

module.exports = function (format, currentUrl) {
   if (format === "object") {
      return getQuerySearchFloatObject(currentUrl);

   } else if (format === "array") {
      return getQuerySearchFloatArray(currentUrl);

   } else if (format === "arrayObject") {
      return getQuerySearchFloatArrayObject(currentUrl);

   } else {
      throw new Error(`"${format} Format Not Found"`);
   }
}
