export function getQueryNumber(currentUrl) {
   const queryNumber = {};
   const urlParams = new URLSearchParams(currentUrl);

   for (let [key, value] of urlParams) {
      queryNumber[key] = value === '' ? null : parseInt(value);
   }

   return queryNumber;
}

export function getArrayQueryNumber(currentUrl) {
   const arrQueryNumber = [];
   const urlParams = new URLSearchParams(currentUrl);

   urlParams.forEach((number) => isNaN(number) === true ? arrQueryNumber.push(NaN) : arrQueryNumber.push(parseInt(number)));

   return arrQueryNumber;
}

export function getQueryFloat(currentUrl) {
   const queryFloat = {};
   const urlParams = new URLSearchParams(currentUrl);

   for (let [key, value] of urlParams) {
      if (isNaN(value) === false) {
         const floatNumber = parseFloat(value);

         if (Number.isInteger(floatNumber) === false) {
            queryFloat[key] = floatNumber;

         } else {
            queryFloat[key] = "it is not float...";
         }
      }
   }

   return queryFloat;
}
