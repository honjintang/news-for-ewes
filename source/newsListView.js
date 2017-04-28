(function(exports) {
  function NewsListView(newsList) {
    this.newsList = newsList;
  }

NewsListView.prototype.htmlConverter = function() {
  var htmlString = "<ul>";
  for (i = 0; i < this.newsList.list.length; i++) {
    htmlString += "<div><li><a href='#headline" + i + "'>" + this.newsList.list[i] + "</a></li></div></br><img src=" + 'public/sheep_' + i + '.jpg><div id=' + i + "></div>";
   }
   return htmlString + "</ul>";
};

exports.NewsListView = NewsListView;
})(this);
