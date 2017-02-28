var React = require("react");


/*var About = React.createClass({
	render:function(){
		return(
			<h3>About Component</h3>	
		);	
	}
});*/

var About = (props)=>{
	return(
			<div>
				<h1 className="text-center">About Component</h1>		
				<p className="text-center">This is a Weather application build on react </p>
				<p className="text-center">
					Here are some of the tools i used:
				</p>
				<ul>
					<li> <a>React</a> - This was the javascript Library i used</li>
					<li><a>OpenWeatherMap</a> - The api i have used</li>
				</ul>
			</div>
		);	
}

module.exports = About;