var ERRORS_KEY = 'registerErrors';

Template.appRegister.onCreated(function() {
	Session.set(ERRORS_KEY, {});
});

Template.appRegister.helpers({
	errorMessages: function() {
    	return _.values(Session.get(ERRORS_KEY));
  }
});

Template.appRegister.events({
	'submit': function(event, template) {
		event.preventDefault();
		var email = template.$('[name=registerEmail]').val();
		var password = template.$('[name=registerPassword]').val();
		var confirm = template.$('[name=registerPasswordConfirm]').val();
		var errors = {};

		if (! email) {
			errors.email = 'Email required';
		}

		if (! password) {
			errors.password = 'Password required';
		}

		if (confirm !== password) {
			errors.confirm = 'Please confirm your password';
		}

		Session.set(ERRORS_KEY, errors);
		if (_.keys(errors).length) {
			return;
		}

		Accounts.createUser({
			email: email,
			password: password
		}, function(error) {
			if (error) {
				return Session.set(ERRORS_KEY, {'none': error.reason});
			}
			Router.go('home');
		});
	}
});
