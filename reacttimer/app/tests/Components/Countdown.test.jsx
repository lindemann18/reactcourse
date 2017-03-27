var expect    = require("expect");
var React     = require("react");
var ReactDOM  = require("react-dom");
var TestUtils = require("react-addons-test-utils");
var $		  = require("jQuery");

var Countdown = require("Countdown");

describe("Countdown",()=>{
	it("should exist",()=>{
		expect(Countdown).toExist();
	})
});