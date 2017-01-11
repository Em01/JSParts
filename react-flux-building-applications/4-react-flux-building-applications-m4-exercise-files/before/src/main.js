$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');

var App = React.createClass({
  render: function() {
    var Child;

    switch(this.props.route) {
    
      case 'about': Child = About;
      default: Child = Home;
    }

    return (
        <div>
          <Child/>
        </div>
      );
  }
});

window.addEventListener('hashchange', render);
render();

React.render(
    <Home />,
    document.getElementById('app')
);
