const getParams = require('../helper/getParams');

module.exports.getQueryFloat = (currentUrl) => {
   const queryFloat = {};
   const urlParams = getParams(currentUrl);

   for (let [key, value] of urlParams) {
      if (!isNaN(value)) {
         const floatNumber = parseFloat(value);
         !Number.isInteger(floatNumber) ? queryFloat[key] = floatNumber : queryFloat[key] = null;
      }
   }

   return queryFloat;
}

module.exports.getArrayQuaryFloat = (currentUrl) => {
   const arrQueryFloat = [];
   const urlParams = getParams(currentUrl);

   urlParams.forEach((number) => {
      if (!isNaN(number)) {
         const floatNumber = parseFloat(number);
         !Number.isInteger(floatNumber) ? arrQueryFloat.push(floatNumber) : arrQueryFloat.push(null);
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

      queryFloat[key] = (!isNaN(value) && !Number.isInteger(floatNumber)) ? floatNumber : null;
      arrQueryFloat.push(queryFloat);
      queryFloat = {};
   }

   return arrQueryFloat;
}
