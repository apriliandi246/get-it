const getQuerySearch = require("../helper/parseLink");

function getQuerySearchStringObject(currentUrl) {
   const objectString = {};
   const querySearch = getQuerySearch(currentUrl);

   if (querySearch === -1) return objectString;

   for (let [key, value] of querySearch) {
      objectString[key] =
         value.trim() === "" ? undefined : value.toString().trim();
   }

   return objectString;
}

function getQuerySearchStringArray(currentUrl) {
   const arrayString = [];
   const querySearch = getQuerySearch(currentUrl);

   if (querySearch === -1) return arrayString;

   querySearch.forEach((value) => {
      value.trim() === ""
         ? arrayString.push(undefined)
         : arrayString.push(value.toString().trim());
   });

   return arrayString;
}

function getQuerySearchStringArrayObject(currentUrl) {
   let objectString = {};
   const arrayString = [];
   const querySearch = getQuerySearch(currentUrl);

   if (querySearch === -1) return arrayString;

   for (let [key, value] of querySearch) {
      objectString[key] =
         value.trim() === "" ? undefined : value.toString().trim();
      arrayString.push(objectString);
      objectString = {};
   }

   return arrayString;
}

module.exports = function (format, currentUrl) {
   if (format === "object") {
      return getQuerySearchStringObject(currentUrl);
   } else if (format === "array") {
      return getQuerySearchStringArray(currentUrl);
   } else if (format === "arrayObject") {
      return getQuerySearchStringArrayObject(currentUrl);
   } else {
      throw new Error(`"${format} Format Not Found"`);
   }
};
