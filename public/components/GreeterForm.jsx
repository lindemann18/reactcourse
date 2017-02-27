var React = require("react");

var GreeterForm = React.createClass({
	onFormSubmit:function(e){
		e.preventDefault();
		var name    = this.refs.name.value;
		var message = this.refs.message.value;
		var updates = {};
		if(name!="" && message !="")
		{
			this.refs.name.value    = "";
			this.refs.message.value = "";

			//this.props.onNewName(name);
			//this.props.onNewMessage(message);
			updates.name    = name;
			updates.message = message;
		}
		this.props.onNewName(updates);
		
	},
	render:function(){
		return(
			<form onSubmit={this.onFormSubmit}>
				<div>
					<input type="text" ref="name"/>
				</div>
				<div>
					<textarea ref="message" placeholder="enter the message"></textarea>
				</div>
				<div>
					<button>Set Name</button>
				</div>
			</form>
		);
	}
});

module.exports = GreeterForm;