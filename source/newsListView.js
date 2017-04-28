(function(exports) {
  function NewsListView(newsList) {
    this.newsList = newsList;
  }

NewsListView.prototype.htmlConverter = function() {
  var htmlString = "<ul>";
  for (i = 0; i < this.newsList.list.length; i++) {
    htmlString += "<div><a href='#headline" + i + "'>" + this.newsList.list[i] + "</a></div></br><div id ='picture'><img src=" + 'public/sheep_' + i + ".jpg></div><div class='summaries' id=" + i + "></div></br>";
   }
   return htmlString + "</ul>";
};

exports.NewsListView = NewsListView;
})(this);
