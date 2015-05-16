var React = require('react');

var tab = React.createClass({

	render: function() {
		var className = 'tab';
		if(this.props.currentTab.title == this.props.tab.title){
			className = 'tab active';
		}

		return (
			<li className={className} onClick={this.props.handleTabChange.bind(null, this.props.tab)}> 
				<a href="javascript:void(0);" className="title">{this.props.tab.title}</a>
				<div className="links">
					<a href={this.props.tab.blogLink} target="_blank"> Read Blog</a>
				</div>		
			</li>
		);
	}

});

module.exports = tab;