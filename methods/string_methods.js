//trim removes all the whitespace

var productType = '  Hardware  ';
console.log('[' + productType.trim() + ']');
// -> returns [Hardware]

var productType = '  Hardware  ';
productType.trim(); //this ends up useless
console.log('[' + productType + ']');
// ->returns [  Hardware  ]

var value = 'My String';
console.log(value.endsWith('ing'));

var value = 'My String';
console.log(value.indexOf('Z'));
//-1

var value = "Some String";
console.log(value.lastIndexOf('S'));
//5

var value = 'Some String';
value.slice(5);
//"String"
value.slice(5, 8);
//"Str"
value.slice(-3);
//ing

var value = "Some String";
value.split(' ').length;
//2

var value = "Some String";
console.log(value.substr(0, 4));
//"Some

var value = "Some String";
value.substring(5, 6);
//S
