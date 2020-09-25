const getQuerySearch = require("../helper/getQuerySearch");

module.exports = (format, currentUrl) => {
   if (format === "object") return getQuerySearchStringObject(currentUrl);
   if (format === "array") return getQuerySearchStringArray(currentUrl);
   if (format === "arrayObject") return getQuerySearchStringArrayObject(currentUrl);
}

function getQuerySearchStringObject(currentUrl) {
   const objectString = {};
   const querySearch = getQuerySearch(currentUrl);

   if (querySearch === -1) return objectString;

   for (let [key, value] of querySearch) {
      objectString[key] = (value.trim() === "" ? null : value.toString().trim());
   }

   return objectString;
}

function getQuerySearchStringArray(currentUrl) {
   const arrayString = [];
   const querySearch = getQuerySearch(currentUrl);

   if (querySearch === -1) return arrayString;

   querySearch.forEach((value) => {
      value.trim() === "" ? arrayString.push(null) : arrayString.push(value.toString().trim())
   });

   return arrayString;
}

function getQuerySearchStringArrayObject(currentUrl) {
   let objectString = {};
   const arrayString = [];
   const querySearch = getQuerySearch(currentUrl);

   if (querySearch === -1) return arrayString;

   for (let [key, value] of querySearch) {
      objectString[key] = (value.trim() === "" ? null : value.toString().trim());
      arrayString.push(objectString);
      objectString = {};
   }

   return arrayString;
}
