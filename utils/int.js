const getParams = require('../helper/getParams');

module.exports.getQueryNumber = (currentUrl) => {
   const queryNumber = {};
   const urlParams = getParams(currentUrl);

   for (let [key, value] of urlParams) {
      queryNumber[key] = (!value || isNaN(value) === true ? null : parseInt(value, 10));
   }

   return queryNumber;
}

module.exports.getArrayQueryNumber = (currentUrl) => {
   const arrQueryNumber = [];
   const urlParams = getParams(currentUrl);

   urlParams.forEach((number) => !number || isNaN(number) === true ? arrQueryNumber.push(null) : arrQueryNumber.push(parseInt(number, 10)));

   return arrQueryNumber;
}

module.exports.getArrObjectNumber = (currentUrl) => {
   let queryNumber = {};
   const arrQueryNumber = [];
   const urlParams = getParams(currentUrl);

   for (let [key, value] of urlParams) {
      queryNumber[key] = (!value || isNaN(value) === true ? null : parseInt(value, 10));
      arrQueryNumber.push(queryNumber);
      queryNumber = {};
   }

   return arrQueryNumber;
}
