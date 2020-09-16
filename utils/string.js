function getQueryString(currentUrl) {
   const queryString = {};
   const urlParams = new URLSearchParams(currentUrl);

   for (let [key, value] of urlParams) {
      queryString[key] = (!value ? null : value.toString());
   }

   return queryString;
}

function getArrayQueryString(currentUrl) {
   const arrQueryString = [];
   const urlParams = new URLSearchParams(currentUrl);

   urlParams.forEach((string) => !string ? arrQueryString.push(null) : arrQueryString.push(string.toString()));

   return arrQueryString;
}

function getArrObjectString(currentUrl) {
   let queryString = {};
   const arrQueryString = [];
   const urlParams = new URLSearchParams(currentUrl);

   for (let [key, value] of urlParams) {
      queryString[key] = (!value ? null : value.toString());
      arrQueryString.push(queryString);
      queryString = {};
   }

   return arrQueryString;
}


module.exports = {
   getQueryString,
   getArrayQueryString,
   getArrObjectString
}
