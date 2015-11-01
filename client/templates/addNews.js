var ERRORS_KEY = 'newsAddErrors';

Template.addNews.helpers({
	errorMessages: function() {
    	return _.values(Session.get(ERRORS_KEY));
    }
});

Template.addNews.events({
	'submit': function(event, template){
		event.preventDefault();
		var titleVar = template.$('[name=title]').val();
		var contentVar = template.$('[name=content]').val();
		var errors = {};

		if (! titleVar) {
			errors.titleVar = 'Title is required';
		}

		if (! contentVar) {
			errors.contentVar = 'Content is required';
		}

		Session.set(ERRORS_KEY, errors);
		if (_.keys(errors).length) {
			return;
		}

		News.insert({
			categoryId: Session.get('currentCategoryID'),
			title: titleVar,
			content: contentVar,
			createdBy: Meteor.user().emails[0].address,
			createdOn: new Date()
		});
		Router.go('home');
	}
});