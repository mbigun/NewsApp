Template.listNews.helpers({
  news: function(catId) {
    return News.find({categoryId: catId});
  }
});