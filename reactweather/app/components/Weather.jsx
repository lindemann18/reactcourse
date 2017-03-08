var React 		   = require("react");
var WeatherForm    = require("WeatherForm");
var WeatherMessage = require("WeatherMessage");
var openWeatherMap = require("openWeatherMap");
var ErrorModal     = require('ErrorModal');

var Weather = React.createClass({
	getInitialState:function(){
		return{
			isLoading:false
		}
	},
	handleSearch:function(location){
		var self = this;
		this.setState({
			isLoading:true,
			errorMessage:undefined,
			location:undefined,
			temp:undefined
		});
		openWeatherMap.getTemp(location).then(
			function(temp)
			{
				self.setState({
					location:location,
					temp:temp,
					isLoading:false
				});
			},
			function(e)
			{
				console.log(e);
				console.log("error here");
				self.setState({
					isLoading:false,
					errorMessage:e.message
				});
				//alert(error);
			}

		);
	},
	componentWillReceiveProps:function(newProps){
		var reglocation = /[a-z\s]{2,32}/i;
		var location = newProps.location.query.location;
		if(location.length>0)
		{
			this.handleSearch(location);
			window.location.hash = "#/";
		}
	},
	componentDidMount:function(){
		var reglocation = /[a-z\s]{2,32}/i;
		var location = this.props.location.query.location;
		if(reglocation.test(location))
		{
			this.handleSearch(location);
			window.location.hash = "#/";
		}
		
	},
	render:function(){
		var {isLoading,temp,location,errorMessage} = this.state;
		function renderMessage()
		{
			if(isLoading)
			{
				return <h3 className="text-center">Fetching Weather...</h3>;
			}else if(temp && location){
				return <WeatherMessage temp={temp} location={location}/>;
			}
		}

		function renderError(){
			if(typeof errorMessage === "string")
			{
				return(
					<ErrorModal message={errorMessage}/>
				);
			}
		}

		return(
			<div>
				<h1 className="text-center page-title">Get Weather</h1>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
				{renderError()}
			</div>
		);
	}
});

module.exports = Weather;