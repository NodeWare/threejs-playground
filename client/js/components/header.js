var React = require('react');

var Header = React.createClass({

	render: function() {
		return (
			<div className="navbar navbar-inverse">
			    <div className="navbar-header">
			        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
			            <span className="icon-bar"></span>
			            <span className="icon-bar"></span>
			            <span className="icon-bar"></span>
			        </button>			        
			        <a className="navbar-brand" href="javascript:void(0)"><i className="mdi-editor-border-color"></i> &nbsp; three.js playground</a>
			    </div>
			    <div className="navbar-collapse collapse navbar-responsive-collapse">			        
			        <ul className="nav navbar-nav navbar-right">
			            <li><a href="https://github.com/NodeWare/threejs-playground" target="_blank">Github</a></li>
			            <li className="dropdown">
			                <a href="bootstrap-elements.html" data-target="#" className="dropdown-toggle" data-toggle="dropdown"> More <b className="caret"></b></a>
			                <ul className="dropdown-menu">
			                    <li><a href="javascript:void(0)">About NodeWare</a></li>
			                    <li><a href="javascript:void(0)">Contribute</a></li>
			                    <li><a href="javascript:void(0)">Suggest a change</a></li>
			                    <li className="divider"></li>
			                    <li><a href="javascript:void(0)">Join NodeWare</a></li>
			                </ul>
			            </li>
			        </ul>
			    </div>
			</div>
		);
	}

});

module.exports = Header;