var account = {
  balance: 0
};

function deposit(account, amount) {
 account.balance += amount;
};

function withdraw(account, amount) {
  account.balance -= amount;
};

function getBalance(account) {
  return account.balance;
};

deposit(account, 4);
withdraw(account, 3);
getBalance(account);

console.log(getBalance(account));

deposit(account, 4);

console.log(getBalance(account));
