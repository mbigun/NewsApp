Template.appLayout.helpers({
	userEmail: function() {
		return Meteor.user().emails[0].address;
	}
});

Template.appLayout.events({
	'click .event-logout': function() {
		Meteor.logout();
		Router.go('home');
	}
});