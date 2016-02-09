try {
  throw new Error('Custom Error');
}
catch(e) {
  console.log(e.name + ' - ' + e.message);
}
//Error - Custom Error

finally {
  console.log('Finally done');
}


try{
  throw new RangeError('Range Error');
}
catch(e) {
  if(e instanceof RangeError)
    console.log(e.name);
}
//RangeError
