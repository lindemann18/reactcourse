var $ = require("jQuery");
module.exports = {

	setTodos:function(todos){
		if($.isArray(todos))
		{
			localStorage.setItem("todos",JSON.stringify(todos));
		}else{
			console.log("wrong data");
		}
	},

	getTodos:function()
	{
		var stringTodos = localStorage.getItem("todos");
		var todos 	    = [];

		try{
			todos = JSON.parse(stringTodos);
		}catch(e){
			console.log(e);
		}

		return $.isArray(todos)?todos:[];

	}

};