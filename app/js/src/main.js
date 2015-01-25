var React = require('react');

var RusInput = React.createClass({displayName: "RusInput",
	render: function(){
		return React.createElement("textarea", {
			rows: "5", 
			type: "text", 
			value: this.props.text, 
			placeholder: "Russian", 
			className: "form-control"})
	}
});

var EngInput = React.createClass({displayName: "EngInput",
	render: function(){
		return React.createElement("textarea", {
			rows: "5", 
			type: "text", 
			placeholder: "English", 
			className: "form-control"})
	}
});

var TranslatorApp = React.createClass({displayName: "TranslatorApp",
	getInitialState: function(){
		return {
			enText: ''
		}
	},
	submitHandler: function(e){
		e.preventDefault();
		console.log(this.refs.ruInput.getDOMNode().value);
		// this.setState({enText: ruInput});
	},
	render: function(){
		var TranslatorAppStyle={
			margin: '0 auto',
			marginTop: '200px'

		}
		return (
			React.createElement("form", {id: "app", style: TranslatorAppStyle, onSubmit: this.submitHandler}, 
				React.createElement("h1", null, "Translate App"), 
				React.createElement(RusInput, {ref: "ruInput"}), 
				React.createElement(EngInput, {text: this.state.enText, ref: "enInput"}), 
				React.createElement("button", {type: "submit", className: "btn btn-default"}, "Translate")
			)
			);
	}
});

React.render(React.createElement(TranslatorApp, null), document.getElementById('appWindow'));