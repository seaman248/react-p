var React = require('react');
var $ = require('jquery');
var yaKey = 'XXX';
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
		var ruIn = this.refs.ruInput.getDOMNode().value.trim();
		if (ruIn) {
			var yaUrl = 'https://translate.yandex.net/api/v1.5/tr.json/translate?'
				+ 'key='+yaKey
				+ '&text='+ ruIn
				+ '&lang=ru-en'
			$.ajax({
				url: yaUrl,
				dataType: 'json',
				success: function(data){
					this.setState({enText: data.text.toString()})
				}.bind(this),
				error: function(xhr, status, err){
					console.error(status, err.toString());
				}
		});
		} else {
			this.setState({enText: ''});
		}
	},
	changeHandler: function(){
		console.log(this.refs.ruInput.getDOMNode().value.trim());
	},
	render: function(){
		var TranslatorAppStyle={
			margin: '0 auto',
			marginTop: '200px'

		}
		return (
			<form id='app' style={TranslatorAppStyle} onSubmit={this.submitHandler} >
				<h1>Translate App</h1>
				<RusInput ref='ruInput' onChange={this.changeHandler} />
				<EngInput text={this.state.enText} ref='enInput' />
				<button type='submit' className='btn btn-default' >Translate</button>
			</form>
			);
	}
});

React.render(<TranslatorApp />, document.getElementById('appWindow'));