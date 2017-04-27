function testNewsListView() {
  var newsList = new NewsList();
  newsList.addHeadline("Ad: Shipper - 'Sheep' to keep in touch with your friends when they move flock.");
  var newsListView = new NewsListView(newsList);
  assert.isTrue(newsListView.htmlConverter().includes("<div><li>Ad: Shipper - 'Sheep' to keep in touch with your friends when they move flock.</li></div>"));
}

testNewsListView();
