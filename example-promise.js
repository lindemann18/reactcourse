/*function getTempCallback(location,callback)
{
	callback(undefined,78);
	callback('City not found');
}

getTempCallback('Philadelphia',function(error,temp){
	if(error)
	{
		console.log('error',error);
	}else{
		console.log("Success",temp);
	}
});

function getTempPromise(location)
{
	return new Promise(function(resolve,reject){
		setTimeout(function(){
			resolve(79);
			reject("city not found");
		},1000);
	});
}

getTempPromise('Philadelphia').then(
	function(temp){
		console.log("promise success",temp);
	},
	function(error)
	{
		console.log("promise Error",error);	
	}
);

*/

// Challenge Area

function addPromise(a,b){
	return new Promise(function(resolve,reject){
		if(typeof a === "number" && typeof b === "number")
		{
			resolve(a + b);
		}else{
			reject("something have failed");
		}
	});
}

addPromise(1,2).then(
	function(sum){
		console.log("success",sum)
	},
	function(error)
	{
		console.log("error",error);
	}
);