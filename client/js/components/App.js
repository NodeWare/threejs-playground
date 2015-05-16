/** @jsx React.DOM */

var React = require('react');
var Header = require('./header');
var Content = require('./content');
var Footer = require('./footer');

var App = React.createClass({

	render: function() {
		return (
			<div>
				<Header />
				<Content />
				<Footer />
			</div>				
		);
	}

});

module.exports = App;