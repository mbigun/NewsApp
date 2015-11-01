var ERRORS_KEY = 'newsEditErrors';

Template.editNews.helpers({
	errorMessages: function() {
    	return _.values(Session.get(ERRORS_KEY));
    }
});

Template.editNews.events({
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

		News.update(this._id, {$set: 
			{
				title: titleVar, 
				content: contentVar, 
				modifiedBy: Meteor.user().emails[0].address, 
				modifiedOn: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
			}
		});
		Router.go('home');
	}
});