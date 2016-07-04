var accounts = [];

function createAccount(account) {
  accounts.push(account)
  return account;
}

function getAccount(username) {
  var matchedAccount;
  for(i =0; i < accounts.length; i++) {
    if(accounts[i].username === username) {
      matchedAccount = account;
    }
  };
  return matchedAccount;
} 

function deposit(account, amount) {
  if (typeof amount === 'number') {
    account.balance += amount;
  } else {
    console.log('ERROR');
  }
}

function withdraw(account, amount) {
  if(typeof amount === 'number') {
    account.balance -= amount;
  } else {
    console.log('ERROR');
  }
};

function getBalance(account) {
  return account.balance;
};

function createBalanceGetter(account) {
  return function() {
    return account.balance
  }
}

var testAccount = createAccount({
  username: 'Tester',
  balance: 10
})

deposit(account, 4);
withdraw(account, 3);
getBalance(account);

console.log(getBalance(account));

deposit(account, 4);

console.log(getBalance(account));
