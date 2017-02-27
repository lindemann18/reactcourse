var names = ['Chuvakovich','ivan','Duende','Meda','Ruben'];


names.forEach(function(name){
	console.log('forEAch ',name);
});

names.forEach((name)=>{
	console.log("arrow func ",name);
})

names.forEach((name)=>console.log("one line arrow ",name));

var returnMe = (name)=>name+" !";

console.log(returnMe("Chuvakovich"));