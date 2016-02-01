//body of html page
<article id="article1">
  <h3>Title goes here</h3>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
  <p>Paragraph 3</p>
</article>

//javascript
var element = document.getElementById('article1');
console.log(element);

document.getElementsByTagName('p');
//retuns an array of the paragraphs

document.getElementsByClassName('special');
//[p.special, p.special]

var a = document.getElementById('article1');
console.log(a.childNodes);
// [text, h4, text, p, text]


