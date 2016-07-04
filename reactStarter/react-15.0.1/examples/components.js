//Sample component

<script type="text.jsx">

ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('myDiv')
);
</script>
 
/* Without JSX
React.render(
  React.createElement('h1', null, 'Hello'),
  document.getElementById('myDiv')
);
*/

//CUSTOM COMPONENT CLASS

var myComponent = React.createClass({
  render: function(){
    return (
      <h1>Hello, world!</h1>  
    );
  }
});
//Then render ->

ReactDOM.render(
  <MyComponent/>,
  document.getElementById('myDiv')
);

//props

var MyComponent = React.createCalss({
  render: function() {
    return (
      <h1>Hi, {this.props.name}!</h1>  
    );
  }
});

ReactDOM.render(<MyComponent name="Hand" />, document.getElementById('myDiv'));






