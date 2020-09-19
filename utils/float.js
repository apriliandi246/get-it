const getParams = require('../helper/getParams');

module.exports.getQueryFloat = (currentUrl) => {
   const queryFloat = {};
   const urlParams = getParams(currentUrl);

   for (let [key, value] of urlParams) {
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

module.exports.getArrayQuaryFloat = (currentUrl) => {
   const arrQueryFloat = [];
   const urlParams = getParams(currentUrl);

   urlParams.forEach((value) => {
      if (isNaN(value) === false) {
         const floatNumber = parseFloat(value);
         const isInteger = !Number.isInteger(floatNumber);

         if (isInteger === false) {
            arrQueryFloat.push(floatNumber);

         } else {
            arrQueryFloat.push(null);
         }
      }
   });

   return arrQueryFloat;
}

module.exports.getArrObjectFloat = (currentUrl) => {
   let queryFloat = {};
   const arrQueryFloat = [];
   const urlParams = getParams(currentUrl);

   for (let [key, value] of urlParams) {
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
