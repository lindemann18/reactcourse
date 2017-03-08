var axios = require("axios");

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=850ff59fbc906529da6889c78e1f6105&units=metric';

//adf7f0c9b14bd4cd9b0c0cc44b521ea5

module.exports = {
	getTemp:function(location){
		var encodedLocation = encodeURIComponent(location);
		var requestUrl =`${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
		return axios.get(requestUrl).then(
			function(response)
			{
				if(response.data.cod && response.data.message)
				{
					throw new Error(response.data.message);
				}else{
					console.log(response);
					return response.data.main.temp;
				}
			},
			function(error)
			{
				throw new Error(error.response.data.message);
			}
		);
	}
}