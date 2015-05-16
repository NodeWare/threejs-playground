var React = require('react');
var Tab = require('./tab');
var Post = require('./post');

var Content = React.createClass({
	getInitialState: function() {
		return {
			tutorials: [
			{
				title: 'Getting started with Three.js - Part 1', 
				blogLink: 'http://www.howtojs.org/getting-started-with-three-js-part-1/',
				author: 'Suroor Wijdan',
				twitter: 'wotthetech',
				demoUrl: '/rotating-box.html',
				website: 'http://www.howtojs.org',
				description: ''
			}, 
			{
				title:'Getting Started with Three.js (3D Earth) - Part II', 
				blogLink: 'http://www.howtojs.org/getting-started-with-three-js-3d-earth-part-ii/',
				author: 'Suroor Wijdan',
				twitter: 'wotthetech',
				demoUrl: '/solar-system/index.html',
				website: 'http://www.howtojs.org',
				description: ''
			}
			],
			currentTab: {
				title: 'Getting started with Three.js - Part 1', 
				blogLink: 'http://www.howtojs.org/getting-started-with-three-js-part-1/',
				author: 'Suroor Wijdan',
				twitter: 'wotthetech',
				demoUrl: '/rotating-box.html',
				website: 'http://www.howtojs.org',
				description: ''
			} 
		};
	},	
	handleTabChange: function(tab){
		this.setState({currentTab: tab});
	},
	render: function() {
		var tabs = [];
		var self = this;
		this.state.tutorials.forEach(function(el, idx){
			tabs.push(<Tab tab={el} currentTab={self.state.currentTab} key={idx} handleTabChange={self.handleTabChange}/>);	
		});
		return (
			<div>
				<div className="col-md-4 well list">
				<h4>List of Tutorials</h4>
					<ul className="stylenone">						
					 {tabs}																	
					</ul>
				</div>
				<div className="col-md-7 well pull-right content">
					<Post currentPost={this.state.currentTab}/>								
				</div>
			</div>			
		);
	}
});

module.exports = Content;