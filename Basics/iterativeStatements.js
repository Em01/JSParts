//do while

var i = 0;
do {
  i += 2;
} while (i < 10);

//while

var i = 0;
while (i < 10) {
  i += 2;
}

//for

for(var i = 0; i < iCount; i++) {
  alert(i);
}

//for in-enumerate BOM properties

for (sProp in window) {
  alert(sProp);
}

//break
var iNum = 0;

for(var i=1; i < 10; i++) {
  if(i % 5 == 0) {
    break;
  }
  iNum++;
}
alert(iNum);
// 4

//continue
var iNum = 0;

for(var i=1; i < 10; i++) {
  if(i % 5 == 0) {
    continue;
  }
  iNum++;
}
alert(iNum);
//8


//labels
var iNum = 0;

outermost;
for(var i=0; i < 10; i++) {
  for (var j=0; j <10; j++) {
    if (i ==5 && j == 5) {
      break outermost;
    }
    iNum++;
  }
}
alert(iNum);
//55


//Switch

switch(i) {
  case 25:
    console.log("25");
    break;
  case 35:
    console.log("35");
    break;
  default:
    console.log("other");
}
