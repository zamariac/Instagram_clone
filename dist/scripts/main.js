var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('backbone/node_modules/underscore');
Backbone.$ = $;

var UserModel = require('./models/usermodels.js');
var UserCollection = require('./collections/usercollections.js');
var UserRouter = require('./userrouter.js');


$(document).ready(function() {
	console.log('the document is ready');
	var user = new UserRouter();
	Backbone.history.start();

	var users = new UserCollection();
	var loggedInUser = false;

	users.fetch({ success: onUsersLoaded });

	function onUsersLoaded(newlyFetchedCollection) {

		$('#register-form').on('submit', function(e) {
			e.preventDefault();

			$('#register-error').html('');

			var newUser = new UserModel({
				username: $('#register-username').val(),
				password: $('#register-password').val()
			});

			if(!newUser.isValid()){
				$('#register-error').html(newUser.validationError);
			}
			else {
				newUser.save();
				user.navigate('feed', {trigger: true});
			}
			
		});

		$('#login-form').on('submit', function(e) {
			e.preventDefault();

			$('#login-error').html('');

			var currentUser = new UserModel({
				username: $('#login-username').val(),
				password: $('#login-password').val()
			});

			if(!currentUser.isValid()) {
				$('#login-error').html(currentUser.validationError);
			}
			else{
				loggedInUser = users.findWhere({
					username: $('#login-username').val(),
				});

				if(loggedInUser) {
					user.navigate('feed', {trigger: true});
				}
				else {
					$('#login-error').html('Your username / password combination is incorrect.');
				}
			}
		});
	}

})

