module.exports = function getQuerySearch(currentUrl) {
   if (currentUrl.search(/[?]/) === -1) {
      return -1;
   }

   return new URLSearchParams(currentUrl.slice(currentUrl.search(/[?]/)));
}
