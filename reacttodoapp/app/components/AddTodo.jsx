var React = require("react");


var AddTodo = React.createClass({
	handleSubmit:function(e){
		e.preventDefault();
		var todoText = this.refs.todoText.value;
		if(todoText.length>0)
		{
			this.refs.todoText.value  = "";
			this.props.onAddTodo(todoText);
		}else{
			this.refs.todoText.focus();
		}
	},
	componentDidMount:function(){
		var input = document.getElementById("todoInput");
		if(input)
		{
			input.focus();
		}
	},
	render:function(){
		return(
			<div className="container__footer">
				<form onSubmit={this.handleSubmit}>
					<input type="text" ref="todoText" id="todoInput" placeholder="What do you need to do?"/>
					<button className="button expanded">Add to do</button>
				</form>
			</div>
		);
	}
});

module.exports = AddTodo;