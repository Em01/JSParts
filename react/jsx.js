//A basic unit of JSX = element
//JSX elements are treated like JS expressions and can go anywhere that JS expressions can.
//no self closing tags
<br />

//Any code in JSX tags will be read as JSX not JavaScript. use {} if needs eval as JS.

var h1 = <h1>Hello</h1>;

var myDiv = (
    <div>
      <h1>Hello</h1>
    </div>
)

//A JSX expression must have one outermost expression

var para = (
  <div id="the-outermost">
    <p>I am a paragraph</p>
  </div>
);

//Render - ReactDOM.render-first arg should evaluate to a JSX expression

var React = require('react');
var ReactDOM = require('react-dom');

ReactDom.render(
  <h1>Hello</h1>,
  document.getElementById('app')
);

//ReactDOM.render only updates DOM elements that have changed-virtual DOM
//
//class = className

var myDiv = <div className="big">Big Div</div>
ReactDOM.render(
  myDiv,
  document.getElementById('app')
);

var math = <h1>2 + 3 = {2 + 3}</h1>;
ReactDOM.render(
  math,
  document.getElementById('app')  
);

//you can access vars while inside a JSX expression even if they were declared outside
//
//JSX elements can have event listeners just like HTML elements can-react programming
//means constantly working with event listeners.

<img onClick = {myFunct} />

//you cannot inject an if statement into a JSX expression-due to how jsx is compiled

if(coinToss() == 'heads') {
  var img = <img src={pics.kitty} />;
} else {
  var img = <img src={pics.doggy} />;
}

ReactDOM.render(
  img,
  document.getElementById('app')
);

var img = <img src={pics[coinToss() == 'heads' ? 'kitty' : 'doggy']} />;

{!judemental && <li>hi</li>};

//use map to create a list of JSX elements

var strings = ["a", "b", "aa", "bb"];

var listItems = 
strings.map(function(string) {
  return <li>{string}</li>;
});

<ul>{listItem}</ul>

var peopleLIs = people.map(function(person, i) {
  return <li key= {"person_" + i}>{person}</li>;
});
