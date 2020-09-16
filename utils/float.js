const getParams = require('../helper/getParams');

module.exports.getQueryFloat = (currentUrl) => {
   const queryFloat = {};
   const urlParams = getParams(currentUrl);

   for (let [key, value] of urlParams) {
      if (!isNaN(value)) {
         const floatNumber = parseFloat(value);

         if (!Number.isInteger(floatNumber)) {
            queryFloat[key] = floatNumber;

         } else {
            queryFloat[key] = null;
         }
      }
   }

   return queryFloat;
}
