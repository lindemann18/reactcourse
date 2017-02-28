var React  = require("react");
var {Link} = require("react-router");

var Examples = (props)=>{
	return(
			<div>
				<h1 className="text-center">Examples Component</h1>
				<p className="text-center">Here are a few examples locations to try out</p>
				<ol className="text-center">
					<li className="text-center">
						<Link to="/?location=Culiacan">Culiacan </Link>
					</li>
					<li className="text-center">
						<Link to="/?location=Mochis">Mochis </Link>
					</li>
					<li className="text-center">
						<Link to="/?location=Chisinau">Chisinau </Link>
					</li>
				</ol>
			</div>
		);
}

module.exports = Examples;