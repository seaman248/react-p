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
		var appStyle={
			margin: '0 auto',
			marginTop: '200px'

		}
		return (
			<div id='app' style={appStyle} >
				<RusInput />
				<EngInput />
			</div>
			);
	}
});

React.render(<TranslatorApp />, document.getElementById('appWindow'));