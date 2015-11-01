Template.appHome.helpers({
	news: function(categoryId) {
		return News.find({categoryId: categoryId});
	}
});