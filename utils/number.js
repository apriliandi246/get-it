export function getQueryNumber(currentUrl) {
   const queryNumber = {};
   const urlParams = new URLSearchParams(currentUrl);

   for (let [key, value] of urlParams) {
      queryNumber[key] = (!value || isNaN(value) === true ? null : parseInt(value, 10));
   }

   return queryNumber;
}

export function getArrayQueryNumber(currentUrl) {
   const arrQueryNumber = [];
   const urlParams = new URLSearchParams(currentUrl);

   urlParams.forEach((number) => !number || isNaN(number) === true ? arrQueryNumber.push(null) : arrQueryNumber.push(parseInt(number, 10)));

   return arrQueryNumber;
}

export function getQueryFloat(currentUrl) {
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
