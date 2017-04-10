var moment = require("moment");

console.log(moment().format());

// Janury 1st 1970 @ 12:00 ->0
// Janury 1st 1970 @ 12:01 ->60

var now = moment();

console.log('current time stamp ',  now.unix());

var timestamp = 1491533756;
var currentMoment = moment.unix(timestamp);
console.log(currentMoment.format("DD MMM YYYY"));
