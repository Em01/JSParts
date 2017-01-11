//props object with information

var Greeting = React.createClass(
    {
    
      render: function(){
        return <h1>Hi there, {this.props.firstName}</h1>;
      }
    }    
);

