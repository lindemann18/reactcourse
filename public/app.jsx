// Includes
var React    = require('react');
var ReactDOM = require('react-dom');
var Greeter  = require("Greeter");

var name     = "Chuvakovich";
var lastname = "Zukovsky";
var message  = "holis vato";

 ReactDOM.render(
    <Greeter name={name} lastname={lastname} message = {message}/>,
    document.getElementById("app")
);