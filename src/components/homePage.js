"use strict";

var React = require('react'); //common js pattern

var Home = React.createClass({
  render: function(){
    return (
      <div className="jumbotron">
        <h1>Pluralsight Adminstration</h1>
        <p>React, React Router, and Flux for ultra-responsive web apps.</p>
      </div>
    );
  }
});

module.exports = Home;
