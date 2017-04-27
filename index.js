var url = 'politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live';

var apiRequestURL = ["http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/" + url];

var apiRequestURLString = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=https://www.theguardian.com/' + url;
var alienApiRequest = [apiRequestURLString];

var newsList = new NewsList();
makeAPIRequests(apiRequestURL);
var controller = new Controller(newsList);
controller.sendToIndex();
makeAlienApiRequests(alienApiRequest);


function makeAPIRequests(apiRequestURL) {
  for(i=0;i<apiRequestURL.length;i++) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", apiRequestURL[i], false);
    xhr.send();
    newsList.addHeadline(JSON.parse(xhr.response).response.content.webTitle);
}
}
function makeAlienApiRequests(alienApiRequest) {
  for(i=0;i<alienApiRequest.length;i++) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", alienApiRequest[i], false);
    xhr.send();
    document.getElementById(i).innerHTML = JSON.parse(xhr.response).sentences;
}
}
