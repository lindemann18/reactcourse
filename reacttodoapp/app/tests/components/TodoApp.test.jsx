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
	});

	it("should toggle completed value when handleTogglecalled",()=>{
		var todoData = {id:11,text:"test features",completed:false};
		var todoApp  = TestUtils.renderIntoDocument(<TodoApp/>);
		todoApp.setState({todos:[todoData]});

		// check that todos first item has complete value of false
		// call handleToggle with 11
		// verify the value has changed
		expect(todoApp.state.todos[0].completed).toBe(false);
		todoApp.handleToggle(11);
		expect(todoApp.state.todos[0].completed).toBe(true);
	});
});