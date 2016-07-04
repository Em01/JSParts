console.log('starting password manager');

var storage = require('node-persist');

storage.initSync();

function createAccount(account){
  var accounts = storage.getItemSync('accounts');

  if (typeof accounts === 'undefined') {
    accounts = [];
  }

  accounts.push(account);
  storage.setItemSync('accounts', accounts);
 
  return account;
}

function getAccount(accountName){
  var accounts = storage.getItemSync('accounts');
  var matchedAccount;

  accounts.forEach(function(account){
    if(account.name === accountName){
      matchedAccount = account;
    } else {
      return 'undefined'
    }
  });
  return matchedAccount;
}

/*createAccount({
  name: 'Test',
  username: 'tester',
  password: '123'
});
*/

var testAccount = getAccount('Test');
console.log(testAccount);
