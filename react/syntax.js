var h1 = <h1>Hi</h1>;

ReactDom.Render(
  h1,
  document.getElementById('app')
);

var h1 = React.createElement(
  "h1",
  null,
  "hello"
)
