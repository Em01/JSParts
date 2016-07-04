var i = 0;
var countLimit = 8;

while(i < countLimit) {
  console.log('while: ' + i);
  i++;
}

for(i = 0; i < countLimit; i++) {
  console.log('for: ' + i);
}

function countDownWhile(start, stop){
  while (start < stop) {
    console.log('while: ' + start);
    stop--;
  }
}

function countDownFor(start, stop){
  for(start = 0; start < stop; start--) {
    console.log('for: ' + start);
  }
}
