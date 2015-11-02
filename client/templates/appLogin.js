var ERRORS_KEY = 'loginErrors';

Template.appLogin.onCreated(function() {
	Session.set(ERRORS_KEY, {});
});

Template.appLogin.helpers({
	errorMessages: function() {
    	return _.values(Session.get(ERRORS_KEY));
  }
});

Template.appLogin.events({
	'submit': function(event, template){
		event.preventDefault();
		var email = template.$('[name=loginEmail]').val();
		var password = template.$('[name=loginPassword]').val();
		var errors = {};

		if (! email) {
			errors.email = 'Email is required';
		}

		if (! password) {
			errors.password = 'Password is required';
		}

		Session.set(ERRORS_KEY, errors);
		if (_.keys(errors).length) {
			return;
		}

		Meteor.loginWithPassword(email, password, function(error) {
			if (error) {
				return Session.set(ERRORS_KEY, {'none': error.reason});
			}			
			Router.go('home');
		});
	},
	'click #facebook-login': function(event) {
        Meteor.loginWithFacebook({}, function(err){
            if (err) {
                throw new Meteor.Error("Facebook login failed");
            }
            Router.go('home');
        });
    }, 
    'click .event-logout': function(event) {
        Meteor.logout(function(err){
            if (err) {
                throw new Meteor.Error("Logout failed");
            }
        })
    }
});