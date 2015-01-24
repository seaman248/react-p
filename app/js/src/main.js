var React = require('react');

var RusInput = React.createClass({displayName: "RusInput",
	render: function(){
		return React.createElement("textarea", {rows: "5", type: "text", placeholder: "Russian", className: "form-control"})
	}
});

var EngInput = React.createClass({displayName: "EngInput",
	render: function(){
		return React.createElement("textarea", {rows: "5", type: "text", placeholder: "English", className: "form-control"})
	}
});

var TranslatorApp = React.createClass({displayName: "TranslatorApp",
	render: function(){
		var appStyle={
			margin: '0 auto',
			marginTop: '200px'

		}
		return (
			React.createElement("div", {id: "app", style: appStyle}, 
				React.createElement(RusInput, null), 
				React.createElement(EngInput, null)
			)
			);
	}
});

React.render(React.createElement(TranslatorApp, null), document.getElementById('appWindow'));