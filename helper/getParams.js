module.exports = (currentUrl) => {
   return new URLSearchParams(currentUrl[0] !== '?' ? currentUrl.slice(currentUrl.search(/[?]/)) : currentUrl);
}
