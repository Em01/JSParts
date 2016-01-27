var dt = new Date();
console.log(dt);
//logs out the current date and time

var dt = new Date(0);
console.log(dt);
//logs out from 1970

var dt = new Date('2/12/2015');
console.log(dt);
//logs out that date with time set to 0

var dt = new Date('March 1, 2016');
console.log(dt);
//logs out date as march 1, 2016 but date will be set to midnight

var dt = new Date('hi mum');
console.log(dt);
//invalid date-not an exception

var dt = new Date('hi mum');
console.log(dt);
//NaN

//Useful functions to format date.

var dt = new Date();
console.log(dt.toString());

var dt = new Date();
console.log(dt.toTimeString());
//time (hour min and sec) also info on the time zone we are in

var dt = new Date();
console.log(dt.getFullYear());

var dt = new Date();
dt.setFullYear(2025);
console.log(dt.getFullYear());
//2025
