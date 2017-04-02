var React      = require("react");
var TodoList   = require("TodoList");
var AddTodo    = require("AddTodo");
var TodoSearch = require("TodoSearch");

var TodoApp = React.createClass({
	getInitialState:function(){
		return {
			showCompleted:false,
			searchText:"",
			todos:[
				{id:1,text:"walk the dog"},
				{id:2,text:"clean the yard"},
				{id:3,text:"Learn Redux"},
				{id:4,text:"Love Vera"}
			]
		};
	},
	handleAddTodo:function(text){
		var id = this.state.todos.length+1;
		var todos = this.state.todos;
		todos.push({id:id,text:text});
		this.setState({todos:todos});
		
	},
	handleSearch:function(showCompleted,searchText){
		this.setState({
			showCompleted:showCompleted,
			searchText:searchText.toLowerCase()
		})
	},
	render:function(){
		var {todos} = this.state;
		return(
			<div>
				<TodoSearch onSearch={this.handleSearch}/>
				<TodoList todos={todos}/>
				<AddTodo onAddTodo={this.handleAddTodo}/>
			</div>
		);
	}
});

module.exports = TodoApp;