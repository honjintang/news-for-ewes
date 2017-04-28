// var date = new Date().toISOString().slice(0,-14);
// var guardianApiUrl = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=debate&tag=politics/politics&from-date=' + date;
//
// function makeAPIRequests(url) {
//
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", url, false);
//   xhr.send();
//   var jason_object = JSON.parse(xhr.responseText);
//   return jason_object;
// }
//
// var guardianJasonObject = makeAPIRequests(guardianApiUrl);

// function extractHeadlines(jason_object) {
//   var headlines = [];
//   for(i=0;i<10;i++){
//     headlines.push(jason_object.response.results[i].webTitle);
//   }
//   return headlines;
// }
//
var newsList = new NewsList();
// headline_array = extractHeadlines(guardianJasonObject);

var fakeHeadlines = ['Sheep elections coming up', 'Missing lamb found', 'Bleat!', 'Frolic!', 'Graze', 'Tragic death of Shrek the sheep', 'Sheepdog Jack wins sheep trials'];
newsList.addHeadline(fakeHeadlines);
var controller = new Controller(newsList);
controller.sendToIndex();


// function extractUrls(jason_object) {
//   var Urls = [];
//   for(i=0;i<10;i++){
//     Urls.push(jason_object.response.results[i].webUrl);
//   }
//   return Urls;
// }

// function makeAlienApiRequests() {
//   var urlarray = extractUrls(guardianJasonObject);
//   summaries = [];
//   urlarray.forEach(function(url) {
//     var aylienUrl = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=' + url;
//     summaries.push(makeAPIRequests(aylienUrl));
//   });
//   return summaries;
// }

var ipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu nisl sapien. Fusce eros nunc, interdum quis rhoncus vel, rhoncus sed neque. Sed lobortis nulla nec congue convallis. Aliquam condimentum, purus vel venenatis ultrices, nisl ligula aliquam orci, nec lacinia mi diam eu lacus. Integer felis risus, dapibus vitae tincidunt quis, dapibus a nisl. Nunc lectus est, euismod sed lobortis in, pretium eu ante. Fusce vestibulum nisi sit amet nulla semper, sit amet lacinia magna egestas. Quisque euismod lacinia dui at dictum.';

function addFakeSummaries() {
  for(i=0;i<10;i++){
    document.getElementById(i).innerHTML = ipsum;
  }
}

// function addSummaries() {
//   var summaries = makeAlienApiRequests();
//   for(i=0;i<10;i++){
//     document.getElementById(i).innerHTML = summaries[i].sentences[0];
//   }
// }
//
// addSummaries();

addFakeSummaries();

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
