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
		var TranslatorAppStyle={
			margin: '0 auto',
			marginTop: '200px'

		}
		return (
			React.createElement("form", {id: "app", style: TranslatorAppStyle}, 
				React.createElement("h1", null, "Translate App"), 
				React.createElement(RusInput, null), 
				React.createElement(EngInput, null), 
				React.createElement("button", {type: "submit", className: "btn btn-default"}, "Translate")
			)
			);
	}
});

React.render(React.createElement(TranslatorApp, null), document.getElementById('appWindow'));