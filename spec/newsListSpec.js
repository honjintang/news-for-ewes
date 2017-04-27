function testNewsList() {
  var newsList = new NewsList();
  newsList.addHeadline("Exclusive story inside: 10 Signs The Ram Is Right For You");
  newsList.addHeadline("Best places In Devon To Get That Summer Trim");
  assert.isTrue(newsList.getHeadlines().includes("Exclusive story inside: 10 Signs The Ram Is Right For You"));
  assert.isTrue(newsList.getHeadlines().includes("Best places In Devon To Get That Summer Trim"));
  assert.isTrue(newsList.getHeadline(1) === "Best places In Devon To Get That Summer Trim");
}



testNewsList();
