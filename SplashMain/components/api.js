
module.exports = function (){
//generate a random Image
var url = 'https://source.unsplash.com/random';

return fetch(url)
.then(function (res) {
  return res.url;

});




}
