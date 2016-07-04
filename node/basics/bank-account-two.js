var accounts = [];
//Account Object
//balance
//username

function createAccount(account) {
  accounts.push(account)
  return account;
}

function getAccount(username) {
  var matchedAccount;

  accounts.forEach(function(account) {
    if (account.username === username) {
      matchedAccount = account;
    }
  });
  return matchedAccount;
}


function deposit(account, amount) {
 account.balance += amount;
};

function withdraw(account, amount) {
  account.balance -= amount;
};

function getBalance(account) {
  return account.balance;
};

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
