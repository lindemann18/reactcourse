var React  = require("react");
var moment = require("moment");

var Todo = React.createClass({
	render:function(){
		var {text,id,completed,createdAt,completedAt} = this.props
		var todoClassName = completed?'todo todo-completed':'todo'
		var renderDate = ()=>{
			var message = 'Created ';
			var timestamp = createdAt;

			if(completed){
				message= 'competed ';
				timestamp = completedAt;
			}

			return message+moment.unix(timestamp).format('DD MMM YYYY');
		};
		return (
			<div className={todoClassName} onClick={()=>{
				this.props.onToggle(id);
			}}>

				<div>
					<input type="checkbox" ref="" checked={completed} />
				</div>
				<div className="">
					<p>{text}</p>
					<p className="todo__subtext">{renderDate()}</p>
				</div>
			</div>
		);
	}
});

module.exports = Todo;