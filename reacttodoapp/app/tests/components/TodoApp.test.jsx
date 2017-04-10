var React     = require("react");
var ReactDOM  = require("react-dom");
var TestUtils = require("react-addons-test-utils");
var expect    = require("expect");
var $		  = require("jQuery");


var TodoApp = require("TodoApp");

describe("todoApp",()=>{
	it("should exist",()=>{
		expect(TodoApp).toExist();
	});

	it("should add todo to the todos state on handleAddTod",()=>{
		var todoText = "Vera Borcuta";
		var todoApp  = TestUtils.renderIntoDocument(<TodoApp/>);

		todoApp.setState({todos:[]});
		todoApp.handleAddTodo(todoText);

		expect(todoApp.state.todos[0].text).toBe(todoText);

		//expect created at to be a number
		expect(todoApp.state.todos[0].createdAt).toBeA('number');
	});

	it("should toggle completed value when handleTogglecalled",()=>{
		var todoData = {id:11,text:"test features",completed:false,createdAt:0,completedAt:undefined};
		var todoApp  = TestUtils.renderIntoDocument(<TodoApp/>);
		todoApp.setState({todos:[todoData]});

		// check that todos first item has complete value of false
		// call handleToggle with 11
		// verify the value has changed
		expect(todoApp.state.todos[0].completed).toBe(false);
		todoApp.handleToggle(11);
		expect(todoApp.state.todos[0].completed).toBe(true);

		//expect completed at to be a number
		expect(todoApp.state.todos[0].completedAt).toBeA('number');
	});

	it("should toggle ¡todo from completed to incomplete",()=>{
		var todoData = {id:11,text:"test features",completed:true,createdAt:0,completedAt:123};
		var todoApp  = TestUtils.renderIntoDocument(<TodoApp/>);
		todoApp.setState({todos:[todoData]});
		expect(todoApp.state.todos[0].completed).toBe(true);
		todoApp.handleToggle(11);
		expect(todoApp.state.todos[0].completed).toBe(false);

		//expect completed at to be a number
		expect(todoApp.state.todos[0].completedAt).toNotExist();
	});
});