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
			name:this.props.name
		};
	},
	onButtonClick:function(e){
		e.preventDefault();
		var name = this.refs.name.value;
		if(name!="")
		{
			this.refs.name.value = "";
			this.setState({
				name: name
			});
		}
		
	},
	render: function(){
		return(
			<div>
				<h1>Hello {this.state.name} {this.props.lastname}</h1>
				<p>{this.props.message}</p>

				<form onSubmit={this.onButtonClick}>
					<input type="text" ref="name"/>
					<button>Set Name</button>
				</form>
			</div>
		);
	}
 });

var name = "Chuvakovich";
var lastname = "Zukovsky";
var message = "holis vato";
 ReactDOM.render(
    <Greeter name={name} lastname={lastname} message = {message}/>,
    document.getElementById("app")
);