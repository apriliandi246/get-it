function getQueryNumber(currentUrl) {
   const queryNumber = {};
   const urlParams = new URLSearchParams(currentUrl);

   for (let [key, value] of urlParams) {
      queryNumber[key] = (!value || isNaN(value) === true ? null : parseInt(value, 10));
   }

   return queryNumber;
}

function getArrayQueryNumber(currentUrl) {
   const arrQueryNumber = [];
   const urlParams = new URLSearchParams(currentUrl);

   urlParams.forEach((number) => !number || isNaN(number) === true ? arrQueryNumber.push(null) : arrQueryNumber.push(parseInt(number, 10)));

   return arrQueryNumber;
}

function getArrObjectNumber(currentUrl) {
   let queryNumber = {};
   const arrQueryNumber = [];
   const urlParams = new URLSearchParams(currentUrl);

   for (let [key, value] of urlParams) {
      queryNumber[key] = (!value || isNaN(value) === true ? null : parseInt(value, 10));
      arrQueryNumber.push(queryNumber);
      queryNumber = {};
   }

   return arrQueryNumber;
}


module.exports = {
   getQueryNumber,
   getArrayQueryNumber,
   getQueryFloat,
   getArrObjectNumber
}
