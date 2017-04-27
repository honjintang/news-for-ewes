(function(exports) {
  function NewsListView(newsList) {
    this.newsList = newsList;
  }

NewsListView.prototype.htmlConverter = function() {
  var htmlString = "<ul>";
  for (i = 0; i < this.newsList.list.length; i++) {
    htmlString += "<div><li>" + this.newsList.list[i] + "</li></div>";
   }
   return htmlString + "</ul>";
};

exports.NewsListView = NewsListView;
})(this);
