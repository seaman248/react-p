var React = require('react');

var Header = React.createClass({
	render: function(){
		return <h1>Hello World!</h1>
	}
});

React.render(<Header />, document.body);