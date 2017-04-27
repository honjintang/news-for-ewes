var apiRequestURL = ['http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=header', 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/world/2017/mar/06/why-do-sheep-get-horny-in-winter-because-the-light-is-baaad-says-study?show-fields=header'];
var newsList = new NewsList();
makeAPIRequests(apiRequestURL);
// var xhr = new XMLHttpRequest();
// xhr.open("GET", apiRequestURL, false);
// xhr.send();
// newsList.addHeadline(JSON.parse(xhr.response).response.content.webTitle);
var controller = new Controller(newsList);
controller.sendToIndex();

// function addEventListenerToPage() {
//   window.addEventListener('onclick', makeAPIRequest);
// }


function makeAPIRequests(apiRequestURL) {
  for(i=0;i<apiRequestURL.length;i++) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", apiRequestURL[i], false);
    xhr.send();
    newsList.addHeadline(JSON.parse(xhr.response).response.content.webTitle);
}

}
