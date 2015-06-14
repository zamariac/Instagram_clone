var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.Router.extend({
	routes: {
		'':'home',
		'login':'login',
		'register': 'register',
		'add-image-form': 'addImageForm'

	},

	home: function(){
		$('.page').hide();
		$('#home').show();
	},

	login: function(){
		$('.page').hide();
		$('#login').show();
	},

	register: function(){
		$('.page').hide();
		$('#register').show();
	},

	addImageForm: function() {
		$('.page').hide();
		$('#add-image-form').show();
	}

});