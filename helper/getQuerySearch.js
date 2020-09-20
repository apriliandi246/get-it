module.exports = (currentUrl) => {
   return new URLSearchParams(currentUrl.slice(currentUrl.search(/[?]/)));
}
