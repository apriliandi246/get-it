const getParams = require('../helper/getParams');

module.exports.getQueryNumber = (currentUrl) => {
   const queryNumber = {};
   const urlParams = getParams(currentUrl);

   for (let [key, value] of urlParams) {
      if (value === "" || isNaN(value) === true) {
         queryNumber[key] = null;

      } else {
         queryNumber[key] = parseInt(value, 10);
      }
   }

   return queryNumber;
}

module.exports.getArrayQueryNumber = (currentUrl) => {
   const arrQueryNumber = [];
   const urlParams = getParams(currentUrl);

   urlParams.forEach((value) => {
      if (value === "" || isNaN(value) === true) {
         arrQueryNumber.push(null);

      } else {
         arrQueryNumber.push(parseInt(value, 10));
      }
   });

   return arrQueryNumber;
}

module.exports.getArrObjectNumber = (currentUrl) => {
   let queryNumber = {};
   const arrQueryNumber = [];
   const urlParams = getParams(currentUrl);

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
