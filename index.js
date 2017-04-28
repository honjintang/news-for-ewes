var date = new Date().toISOString().slice(0,-14);
var guardianApiUrl = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=debate&tag=politics/politics&from-date=' + date;
// var headlines = [];



// var url = 'politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live';
//
// var apiRequestURL = ["http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/" + url];
//
// var apiRequestURLString = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=https://www.theguardian.com/' + url;
// var alienApiRequest = [apiRequestURLString];



function makeAPIRequests(url) {

  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, false);
  xhr.send();
  var jason_object = JSON.parse(xhr.responseText);
  return jason_object;
  // for(i=0;i<10;i++){
  //   headlines.push(jason_object.response.results[i].webTitle);
  // }
  // return headlines;
}

function extractHeadlines(jason_object) {
  var headlines = [];
  for(i=0;i<10;i++){
    headlines.push(jason_object.response.results[i].webTitle);
  }
  return headlines;
}

var newsList = new NewsList();
headline_array = extractHeadlines(makeAPIRequests(guardianApiUrl));
newsList.addHeadline(headline_array);
var controller = new Controller(newsList);
controller.sendToIndex();
// makeAlienApiRequests(alienApiRequest);



// function addToNewsList(headlines) {
//   for(i=0;i<10;i++) {
//   newsList.addHeadline(headlines[i]);
//   }
// }
//
// function makeAlienApiRequests(alienApiRequest) {
//   for(i=0;i<alienApiRequest.length;i++) {
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", alienApiRequest[i], false);
//     xhr.send();
//     document.getElementById(i).innerHTML = JSON.parse(xhr.response).sentences;
// }
// }
