function doWork(){
  throw new Error('unable to work');
};

try {
  doWork();
} catch (e) {
  console.log(e.message);
} finally {
  console.log('finally');
}

console.log('try catch ended');
