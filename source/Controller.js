(function(exports) {
  function Controller(newsList) {
    this.newsListView = new NewsListView(newsList);
  }

Controller.prototype.sendToIndex = function() {
  document.getElementById('headlines').innerHTML = this.newsListView.htmlConverter();
};
  exports.Controller = Controller;
})(this);
