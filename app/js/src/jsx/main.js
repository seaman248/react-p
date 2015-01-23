var React = require('react');

var Header = React.createClass({
	render: function(){
		var style = {
			display: true
		}
		return <h1 style={style}>Hello World with react!</h1>
	}
});

React.render(<Header />, document.body)