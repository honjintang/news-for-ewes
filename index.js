var date = new Date().toISOString().slice(0,-14);
var guardianApiUrl = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=debate&tag=politics/politics&from-date=' + date;

function makeAPIRequests(url) {

  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, false);
  xhr.send();
  var jason_object = JSON.parse(xhr.responseText);
  return jason_object;
}

var guardianJasonObject = makeAPIRequests(guardianApiUrl);

function extractHeadlines(jason_object) {
  var headlines = [];
  for(i=0;i<10;i++){
    headlines.push(jason_object.response.results[i].webTitle);
  }
  return headlines;
}

var newsList = new NewsList();
headline_array = extractHeadlines(guardianJasonObject);
newsList.addHeadline(headline_array);
var controller = new Controller(newsList);
controller.sendToIndex();


function extractUrls(jason_object) {
  var Urls = [];
  for(i=0;i<10;i++){
    Urls.push(jason_object.response.results[i].webUrl);
  }
  return Urls;
}

function makeAlienApiRequests() {
  var urlarray = extractUrls(guardianJasonObject);
  summaries = [];
  urlarray.forEach(function(url) {
    var aylienUrl = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=' + url;
    summaries.push(makeAPIRequests(aylienUrl));
  });
  return summaries;
}

function addSummaries() {
  var summaries = makeAlienApiRequests();
  for(i=0;i<10;i++){
    document.getElementById(i).innerHTML = summaries[i].sentences[0];
  }
}

addSummaries();

function makeUrlChange() {
  window.addEventListener('hashchange', showFullSummary);
}

function showFullSummary() {
  document.getElementById(getHeadlineFromUrl(window.location)).innerHTML = summaries[getHeadlineFromUrl(window.location)].sentences.slice(0,4);
}

function getHeadlineFromUrl(location) {
  return location.hash.split('#headline')[1];
}

makeUrlChange();
