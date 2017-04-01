var expect    = require("expect");
var React     = require("react");
var ReactDOM  = require("react-dom");
var TestUtils = require("react-addons-test-utils");

var Timer     = require("Timer");

describe("Timer",()=>{
	it("should exist",()=>{
		expect(Timer).toExist();
	});

	describe("handleStatusChange",(done)=>{
		it("should start counting",()=>{
			var timer = TestUtils.renderIntoDocument(<Timer/>);
				timer.handleStatusChange("started");

				expect(timer.state.countdownStatus).toBe("started");

				setTimeout(()=>{
						expect(timer.state.count).toBe(1);
						done();
				},1001);
		});

		it("should stop counting",()=>{
			var timer = TestUtils.renderIntoDocument(<Timer/>);
			timer.handleStatusChange("started");

			setTimeout(()=>{
				timer.handleStatusChange("paused");
				expect(timer.state.countdownStatus).toBe("paused");
				expect(timer.state.count).toBe(0);
				done();
			},2001);
		});
	});

});