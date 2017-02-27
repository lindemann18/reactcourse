var React = require("react");

var GreeterMessage = React.createClass({
	getDefaultProps:function(){
		return{
			name:"something",
			lastname:"none",
			message:"none message"
		}
	},
	render:function(){
		return(
			<div>
				<h1>{this.props.name} {this.props.lastname}</h1>
				<p>{this.props.message}</p>
			</div>
		);
	}
});

module.exports = GreeterMessage;