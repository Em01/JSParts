//trim removes all the whitespace

var productType = '  Hardware  ';
console.log('[' + productType.trim() + ']');
// -> returns [Hardware]

var productType = '  Hardware  ';
productType.trim(); //this ends up useless
console.log('[' + productType + ']');
// ->returns [  Hardware  ]
