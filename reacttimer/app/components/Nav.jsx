	var React  	         = require("react");
var {Link,IndexLink} = require("react-router");

var Nav = React.createClass({

	render:function(){
		return(
			<div className="top-bar">
			 	<div className="top-bar-left">
			 		<ul className="menu">
			 			<li className="menu-text">React Weather App</li>
			 			<li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Timer</IndexLink></li>
			 			<li><Link to="/About" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Countdown</Link></li>
			 		</ul>
			 	</div>
			 	<div className="top-bar-right">
			 		<ul className="menu">
			 			<li className="menu-text">Created By <a href="www.github.com/lindemann18" target="_blank">Chuvakovich</a></li>
			 		</ul>
			 	</div> 
			 </div>
		);
	}
});

module.exports = Nav;