var CURRENT_CATEGORY_ID = 'currentCategoryID';

Template.listCategories.helpers({
	categories: function() {
		return Categories.find({});
	}
});

Template.listCategories.events({
	'click .current-category': function(event, template){
		Session.set(CURRENT_CATEGORY_ID, this._id);
	}
});