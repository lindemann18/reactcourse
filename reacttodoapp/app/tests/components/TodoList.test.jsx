var React     = require("react");
var ReactDOM  = require("react-dom");
var TestUtils = require("react-addons-test-utils");
var expect    = require("expect");
var $		  = require("jQuery");

var TodoList  = require("TodoList");
var Todo      = require("Todo");

describe("todoList",()=>{
	it("should exist",()=>{
		expect(TodoList).toExist();
	});

	it("it should render one to do component for each Todo item",()=>{
		var todos 	 		= [{id:1,text:"clean my room"},{id:2,text:"do more"}];
		var todolist 		= TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
		var todosComponents = TestUtils.scryRenderedComponentsWithType(todolist,Todo);
		expect(todosComponents.length).toBe(todos.length);
	});

	it("it should render empty message if no todos",()=>{
		var todos 	 		= [];
		var todolist 		= TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
		var $el 		    = $(ReactDOM.findDOMNode(todolist));
		expect($el.find('.container__message').length).toBe(1);
	});
});