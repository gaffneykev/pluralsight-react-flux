"use strict";

var React = require('react'); //common js pattern

var About = React.createClass({

  statics: {
    willTransitionTo: function(transition, params, query, callback) {
      if(!confirm('Are you sure you want to read a page that is this borning?')){
        transition.about();
      }
      else {
        callback();
      }
    },

    willTransitionFrom: function(transition, component) {
      if(!confirm('Are you sure you want to leave a page that is this exciting?')){
        transition.about();
      }
    }
  },

  render: function(){
    return (
      <div>
        <h1>About</h1>
        <p>This application uses the following technologies:</p>
        <ul>
          <li>React</li>
          <li>React Router</li>
          <li>Flux</li>
          <li>Node</li>
          <li>Gulp</li>
          <li>Browserify</li>
          <li>bootstrap</li>
        </ul>
      </div>
    );
  }
});

module.exports = About;
