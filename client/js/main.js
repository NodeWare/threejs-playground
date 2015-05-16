/**
 * @fileOverview main file of the app, browserify traverses pacakage dependencies form this
 * @author Suroor Wijdan
 */


var React = require('react');
var App = require('./components/App.js');

React.render(<App/>, document.getElementById('container'));