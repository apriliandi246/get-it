module.exports = (currentUrl) => {
   return new URLSearchParams(currentUrl[0] === '?' ? currentUrl : currentUrl.slice(currentUrl.search(/[?]/)));
}
