var myArgumentValues = function () {
  console.log(arguments.length);
};
myArgumentValues(1, true, 'Settings');
//3

var moreArguments = function() {
  console.log(arguments.length[0]);
};

myArgumentValues(1, true, 'Settings');
//1
