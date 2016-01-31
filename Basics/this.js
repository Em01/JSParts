console.log(typeof this);
//object

var employee = {
  name: 'Jeff',
  updateSalary: function() {
    var fn = function() {
      console.log(this);
    };
    fn();
  }
};
//Window


//CALL

var updateZipCode = function() {
  console.log(this);
};
updateZipCode.call({});
//Object {}

var updateZipCode = function (newZip, country) {
  console.log(newZip + ' ' + country);
};
var zipCode = {
  zip: '11787'
};
updateZipCode.call(zipCode, '11888', 'us');
//11888 us



//APPLY
var updateZipCode = function (newZip, country) {
  console.log(newZip + ' ' + country);
};
var zipCode = {
  zip: '11787'
};
updateZipCode.apply(zipCode, ['11888', 'us']);
//11888 us

