var React = require('react');

var Post = React.createClass({
	render: function() {
		return (
			<div>
				<h3> {this.props.currentPost.title}</h3>
				<div className="info">
					Author: <a href={this.props.currentPost.website}> {this.props.currentPost.author} </a> &nbsp;&nbsp;	
					Twitter: <a href={'http://www.twitter.com/' +this.props.currentPost.twitter}>@{this.props.currentPost.twitter}</a>	
				</div>
				<div className="description">
					<p> {this.props.currentPost.description}</p>
				</div>
				<div className="demo">
					<iframe src={this.props.currentPost.demoUrl} width="100%" height="500px" seemless="seemless"></iframe>
				</div>
			</div>							
		);
	}
});

module.exports = Post;