var React = require("react");

var ErrorModal = React.createClass({
	getDefaultProps:function(){
		return{
			title:"Error"
		}
	},
	propTypes:{
		title:React.PropTypes.string,
		message:React.PropTypes.string.isRequired
	},	
	componentDidMount:function(){
		var modal = new Foundation.Reveal($('#error-modal'));
		modal.open();
	},
	render:function(){
		var {title,message} = this.props;
		return(
			<div className="reveal tiny text-center" id="error-modal" data-reveal="">
			  <h4>{title}</h4>
			  <p className="lead">{message}</p>
			  <button className="howllow button" data-close="" aria-label="Close modal" type="button">
			    Okay
			  </button>
			</div>
		);
	}
});

module.exports = ErrorModal;