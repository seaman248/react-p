var React = require('react');

var Header = React.createClass({displayName: "Header",
	render: function(){
		return React.createElement("h1", null, "Hello World!")
	}
});

React.render(React.createElement(Header, null), document.body);