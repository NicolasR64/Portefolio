/* Read Json */

function readJson(requestUrl) {
  let request = new XMLHttpRequest();
  request.open("GET", requestUrl);
  request.responseType = "json";
  request.send();

  request.onload = function () {
    var skills = request.response;
    populateHeader(superHeroes);
    showHeroes(superHeroes);
  };
}
