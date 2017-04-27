(function(exports) {
  function NewsList() {
    this.list = [];
  }

  NewsList.prototype.addHeadline = function(headline) {
    this.list.push(headline);
  };


  NewsList.prototype.getHeadline = function(index) {
    return this.list[index];
  };

  NewsList.prototype.getHeadlines = function() {
    var headlines = "";
    for(i = 0; i < this.list.length; i++) {
      headlines += this.list[i];
    }
    return headlines;
  };

  exports.NewsList = NewsList;
})(this);
