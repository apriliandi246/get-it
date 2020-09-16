function getQueryFloat(currentUrl) {
   const queryFloat = {};
   const urlParams = new URLSearchParams(currentUrl);

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


module.exports = {
   getQueryFloat
}
