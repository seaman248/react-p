var React = require('react');

var RusInput = React.createClass({
	render: function(){
		return <textarea rows='5' type='text' placeholder='Russian' className='form-control' />
	}
});

var EngInput = React.createClass({
	render: function(){
		return <textarea rows='5' type='text' placeholder='English' className='form-control' />
	}
});

var TranslatorApp = React.createClass({
	render: function(){
		var TranslatorAppStyle={
			margin: '0 auto',
			marginTop: '200px'

		}
		return (
			<form id='app' style={TranslatorAppStyle} >
				<h1>Translate App</h1>
				<RusInput />
				<EngInput />
				<button type='submit' className='btn btn-default' >Translate</button>
			</form>
			);
	}
});

React.render(<TranslatorApp />, document.getElementById('appWindow'));