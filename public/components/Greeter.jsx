var React 		   = require("react");
var GreeterMessage = require("GreeterMessage");
var GreeterForm    = require("GreeterForm");

 var Greeter = React.createClass({
	getDefaultProps:function(){
		return{
			name: "react",
			lastname:".js",
			message:"nothing"
		};
	},
	getInitialState:function(){
		return{
			name:this.props.name,
			message:this.props.message
		};
	},
	handleNewData:function(updates){
		this.setState({
			name:updates.name,
			message:updates.message
		});
	},
	render: function(){
		return(
			<div>
				<GreeterMessage name={this.state.name} lastname={this.props.lastname} message={this.state.message}/>
				<GreeterForm onNewName={this.handleNewData} onNewMessage={this.handleNewData}/>	
			</div>
		);
	}
 });

 module.exports = Greeter;