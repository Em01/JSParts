//to create and render a new React component:

var React = require('react');

var ReactDOM = require('react-dom');

var MyComponentClass = 
  React.createClass({
    render: function(){
      return <h1>Hello</h1>;
    }
  });

ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);

//to make a component class use React.createClass-store this in a var.
//to make an instance
<myComponent />

//class based component is used whenever we want to have the concept of state
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }
}

//functional components are more static
const myComponent = (props) => {}
