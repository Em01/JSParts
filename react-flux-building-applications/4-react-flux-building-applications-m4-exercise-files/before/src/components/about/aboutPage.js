'use strict';

var React = require('react');

var About = React.createClass({
  render: function(){
    return (
      <div>
        <h1>About</h1>
        <p>
          The app
          <ul>
            <li>one</li>
            <li>two</li>
          </ul>
        </p>
      </div>
        
      );
  }

});

module.exports = About;
