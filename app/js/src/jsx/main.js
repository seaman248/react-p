var React = require('react');
var $ = require('jquery');

var RusInput = React.createClass({
	render: function(){
		return <textarea 
			rows='5' 
			type='text' 
			placeholder='Russian' 
			className='form-control' />
	}
});

var EngInput = React.createClass({
	render: function(){
		return <textarea 
			rows='5' 
			type='text' 
			value={this.props.text} 
			placeholder='English'
			className='form-control' />
	}
});

var TranslatorApp = React.createClass({
	getInitialState: function(){
		return {
			enText: ''
		}
	},
	submitHandler: function(e){
		e.preventDefault();
		console.log(e.target.tagName);
		var ruIn = this.refs.ruInput.getDOMNode().value.trim();
		if (ruIn) this.setState({enText: ruIn});
	},
	render: function(){
		var TranslatorAppStyle={
			margin: '0 auto',
			marginTop: '200px'

		}
		return (
			<form id='app' style={TranslatorAppStyle} onSubmit={this.submitHandler} >
				<h1>Translate App</h1>
				<RusInput ref='ruInput' />
				<EngInput text={this.state.enText} ref='enInput' />
				<button type='submit' className='btn btn-default' >Translate</button>
			</form>
			);
	}
});

React.render(<TranslatorApp />, document.getElementById('appWindow'));