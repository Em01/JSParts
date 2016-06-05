/*
var amount;

getDrinksWithVouchers(amount, function(vouchers, err) {
  if (err) complainToBouncer(err)
  buyWine(vouchers * 0.3, function(moreVouchers, err) {
    if (err) complainToBouncer(err).....
*/

//With promises
var amount = 1000;

getDrinksWithVouchers(1000)
  .then(buyWine)
  .then(buyShots)
  .then(buyCider)
  .catch(function(err) {
    complainToBouncer(err);
    fallOver();
  });

function buyWine(vouchers) {
  return vouchers * 0.3;
}

function buyShots(moreVouchers) {
  return moreVouchers * 0.05;
}

function buyCider(evenMoreVouchers) {
  return evenMoreVouchers * 0.5;
}
