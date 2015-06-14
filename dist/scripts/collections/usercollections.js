var Backbone = require('backbone');
var $ = require('jquery');
var UserModel = require('../models/usermodels.js')
Backbone.$ = $

module.exports = Backbone.Collection.extend({
	model: UserModel,
	url: 'http://tiny-pizza-server.herokuapp.com/collections/zamariac3'
});