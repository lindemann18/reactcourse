var React = require("react");
var Clock = require("Clock");
var CountdownForm = require("CountdownForm");

var Countdown = React.createClass({
	getInitialState:function(){
		return {count:0, countDownStatus:'stopped'}
	},
	handleSetCountdown:function(seconds){
		this.setState({
			count:seconds,
			countDownStatus:'started'
		});
	},
	startTimer:function(){
		this.timer = setInterval(()=>{
			var newCount = this.state.count - 1;
			this.setState({
				count:newCount >=0? newCount:0,
				countDownStatus:'stopped'
			});
		},1000);
	},
	componentDidUpdate:function(prevProps,prevState){
		console.log("here");
		if(this.state.countDownStatus !==prevState.countDownStatus)
		{
			switch(this.state.countDownStatus)
			{
				case 'started':
					this.startTimer();
				break;
			}
		}
	},
	render:function(){
		var {count} =this.state;
		return (
			<div>
				<Clock totalSeconds={count}/>
				<CountdownForm onSetCountdown={this.handleSetCountdown}/>
			</div>
		);
	}
});

module.exports = Countdown;