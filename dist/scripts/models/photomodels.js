var image = Backbone.Model.extend({
	defaults:{
		url: null,
		caption: null,
		_id: null,
		username: null,
	},

	validate: function(attr, options){
		if(attr.irl.length === 0){
			return 'Please enter a url';
		}
		return false;
	},

	urlRoot: 'http://tiny-pizza-server.herokuapp.com/collections/zamariac3'

});